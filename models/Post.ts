import { DataTypes, Model } from "sequelize";
import { sequelize } from "../pg";

export class Post extends Model {
    declare id: string;
    declare author_id: string;
    declare title: string;
    declare body: string;
}

Post.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    author_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'posts'
});