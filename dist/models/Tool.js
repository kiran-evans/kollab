"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tool = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
/**
 * @type Tool
 * @property {string} id - The UUID of this Tool
 * @property {string} name - The string to be used to represent this Tool
 */
class Tool extends sequelize_1.Model {
}
exports.Tool = Tool;
Tool.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: pg_1.sequelize,
    tableName: 'tools'
});
