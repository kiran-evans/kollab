"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const fb_1 = require("../lib/fb");
const pg_1 = require("../lib/pg");
class UserModel extends sequelize_1.Model {
    static authenticate = async (idToken) => {
        const decodedIdToken = await fb_1.firebase.auth().verifyIdToken(idToken)
            .catch(err => {
            throw err;
        });
        if (!decodedIdToken) {
            throw "Failed to verify idToken.";
        }
        const user = await UserModel.findOne({
            where: {
                firebase_id: decodedIdToken.uid
            }
        });
        if (!user)
            throw `User with firebase_auth_id=${decodedIdToken.uid} does not exist in the database.`;
        return user;
    };
}
exports.UserModel = UserModel;
UserModel.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    firebase_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'users'
});
