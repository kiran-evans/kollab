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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// App setup and config
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
// Routes
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '/public/index.html'));
});
// Connect to db
const pg_1 = require("./pg");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield pg_1.sequelize.authenticate();
    console.log(`[server] connected to '${pg_1.sequelize.getDatabaseName()}'`);
    yield pg_1.sequelize.sync();
    console.log(`[server] all models in '${pg_1.sequelize.getDatabaseName()}' synchronised successfully`);
}))();
// Server start
app.listen(process.env.PORT, () => {
    console.log(`[server] server started on '${process.env.PORT}'`);
});
