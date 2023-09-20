import { DataTypes, Model } from 'sequelize';
import { User } from '../client/types/User.ts';
import { firebase } from '../lib/fb.ts';
import { sequelize } from '../lib/pg.ts';

export class UserModel extends Model implements User {
    declare id: string;
    declare firebase_id: string;
    declare username: string;

    /**
     * Verifies that the idToken is valid, and returns the associated user data from the database.
     * Will throw an error if the provided idToken is not valid or there is no user in the database with that Firebase Auth uid.
     * 
     * @param {string} idToken - The Firebase idToken to be verified.
     * 
     * @returns A Promise containing the User's data from the database.
     */
    static authenticate = async (idToken: string): Promise<UserModel> => {
        // Get auth user object from Firebase Auth
        const decodedIdToken = await firebase.auth().verifyIdToken(idToken)
            .catch(err => {
                throw err;
            });
        // If idToken is invalid
        if (!decodedIdToken) {
            throw "Failed to verify idToken.";
        }

        // Create a new user in the db - or get the user if already exists - and return the data
        const user = await UserModel.findOne({
            where: {
                firebase_id: decodedIdToken.uid
            }
        });

        if (!user) throw `User with firebase_auth_id=${decodedIdToken.uid} does not exist in the database.`;

        return user;
    }
}

UserModel.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    firebase_id: {
        type: DataTypes.STRING,
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