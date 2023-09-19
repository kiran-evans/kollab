import { DataTypes, Model } from 'sequelize';
import { firebase } from '../lib/fb';
import { sequelize } from '../lib/pg';

/**
 * @type {Object} User
 * @property {string} id - The UUID of the User
 * @property {string} firebase_id - The id of the Firebase Auth user associated with this User
 * @property {string} username - This User's username
 */
export class User extends Model {
    declare id: string;
    declare firebase_id: string;
    declare username: string;

    /**
     * Verifies that the idToken is valid, and returns the associated user data from the database.
     * Will throw an error if the provided idToken is not valid.
     * 
     * @param {string} idToken - The Firebase idToken to be verified.
     * 
     * @returns A Promise containing the User's data from the database.
     */
    static authenticate = async (idToken: string): Promise<User> => {
        // Get auth user object from Firebase Auth
        const decodedIdToken = await firebase.auth().verifyIdToken(idToken)
            .catch(err => {
                return null;
            });
        // If idToken is invalid
        if (!decodedIdToken) throw "Failed authentication.";

        // Create a new user in the db - or get the user if already exists - and return the data
        const [user, created] = await User.findOrCreate({
            where: {
                firebase_id: decodedIdToken.uid
            },
            defaults: {
                firebase_id: decodedIdToken.uid
            }
        });

        if (created) console.log(`[server] created user '${user.id}'`);        

        return user;
    }
}

User.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    firebase_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    tableName: 'users'
});