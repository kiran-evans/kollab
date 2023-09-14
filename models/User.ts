import { DataTypes, Model } from 'sequelize';
import { firebase } from '../lib/fb';
import { sequelize } from '../lib/pg';

export class User extends Model {
    declare id: string;
    declare firebase_id: string;

    static authenticate = async (idToken: string): Promise<User> => {
        const decodedIdToken = await firebase.auth().verifyIdToken(idToken)
            .catch(err => {
                return null;
            });
        // If idToken is invalid
        if (!decodedIdToken) throw "Failed authentication.";

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
    }
}, {
    sequelize,
    tableName: 'users'
});