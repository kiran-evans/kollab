import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../pg';

export class User extends Model {
    declare id: string;
    declare firebase_id: string;
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