import express from 'express';
import cors from 'cors';
import { config } from 'dotenv'
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'node:path';
import mongoose from 'mongoose'
import { logOK, logError } from './helpers/helpers.js';

config()

const PORT = parseInt(process.env.PORT ? process.env.PORT : '3000', 10)
const DB = process.env.MONGO_URL;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, './views')

const app = express()

app.set('view engine', 'pug')
app.set('views', viewsPath)

app.use(express.json())
app.use(cors())
app.use(express.static(publicPath))

const main = async () => {
	try {
		mongoose.set({ 'strictQuery': false })
		mongoose.connect(DB!)
		console.log(logOK(`Connected db`));

		app.listen(PORT, () => console.log(logOK(`Server started at ${PORT}`))
		)
	} catch (error) {
		if (error instanceof Error) {
			console.log(logError(error.message));
		}
	}
}

main()