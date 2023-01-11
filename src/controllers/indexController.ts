import { getLimitLinks } from './../services/linkService.js';
import { Request, Response } from 'express'
import { config } from 'dotenv'
config()

const API_URL = process.env.API_URL

export const getHomePage = async (req: Request, res: Response) => {
	console.log(API_URL);
	const links = (await getLimitLinks()).map(link => `${API_URL}${link.cipher}`)

	return res.render('index', { links: [...links] })
}
