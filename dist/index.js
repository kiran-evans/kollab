"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
app.use('/', express_1.default.static(path_1.default.join(__dirname, 'public')));
const commentRouter_1 = __importDefault(require("./routers/commentRouter"));
app.use('/api/comment', commentRouter_1.default);
const postRouter_1 = __importDefault(require("./routers/postRouter"));
app.use('/api/post', postRouter_1.default);
const userRouter_1 = __importDefault(require("./routers/userRouter"));
app.use('/api/user', userRouter_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '/index.html', req.originalUrl));
});
const pg_1 = require("./lib/pg");
(async () => {
    await pg_1.sequelize.authenticate();
    console.log(`[server] connected to '${pg_1.sequelize.getDatabaseName()}'`);
    await pg_1.sequelize.sync();
    console.log(`[server] all models in '${pg_1.sequelize.getDatabaseName()}' synchronised successfully`);
})();
app.listen(process.env.PORT, () => {
    console.log(`[server] server started on '${process.env.DOMAIN}'`);
});
