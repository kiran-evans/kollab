"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolModel = void 0;
const sequelize_1 = require("sequelize");
const pg_1 = require("../lib/pg");
class ToolModel extends sequelize_1.Model {
}
exports.ToolModel = ToolModel;
ToolModel.init({
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
