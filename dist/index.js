var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import mongoose from 'mongoose';
import { logOK, logError } from './helpers/helpers.js';
import { indexRouter, linkRouter } from './routes/index.js';
config();
const PORT = parseInt(process.env.PORT ? process.env.PORT : '3000', 10);
const DB = process.env.MONGO_URL;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '/views');
const app = express();
app.set('view engine', 'pug');
app.set('views', viewsPath);
app.use(express.json());
app.use(cors());
//app.use(express.static(publicPath))
app.use(indexRouter);
app.use('/links', linkRouter);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        mongoose.set({ 'strictQuery': false });
        mongoose.connect(DB);
        console.log(logOK(`Connected db`));
        app.listen(PORT, () => console.log(logOK(`Server started at ${PORT}`)));
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(logError(error.message));
        }
    }
});
main();
