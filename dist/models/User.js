"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const fb_1 = require("../lib/fb");
const pg_1 = require("../lib/pg");
/**
 * @type {Object} User
 * @property {string} id - The UUID of the User
 * @property {string} firebase_id - The id of the Firebase Auth user associated with this User
 * @property {string} username - This User's username
 */
class User extends sequelize_1.Model {
}
exports.User = User;
_a = User;
/** Verifies that the idToken is valid, and returns the associated user data from the database.
 * Will throw an error if the provided idToken is not valid.
 *
 * @param {string} idToken - The Firebase idToken to be verified.
 *
 * @returns A Promise containing the User's data from the database.
 */
User.authenticate = (idToken) => __awaiter(void 0, void 0, void 0, function* () {
    // Get auth user object from Firebase Auth
    const decodedIdToken = yield fb_1.firebase.auth().verifyIdToken(idToken)
        .catch(err => {
        return null;
    });
    // If idToken is invalid
    if (!decodedIdToken)
        throw "Failed authentication.";
    // Create a new user in the db - or get the user if already exists - and return the data
    const [user, created] = yield _a.findOrCreate({
        where: {
            firebase_id: decodedIdToken.uid
        },
        defaults: {
            firebase_id: decodedIdToken.uid
        }
    });
    if (created)
        console.log(`[server] created user '${user.id}'`);
    return user;
});
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    firebase_id: {
        type: sequelize_1.DataTypes.UUID,
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
