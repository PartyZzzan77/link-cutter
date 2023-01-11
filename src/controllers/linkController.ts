import { isURL } from './../helpers/helpers.js';
import { getLinkWithCipher, saveLink } from './../services/linkService.js';
import { NextFunction, Request, Response } from 'express'
const API_URL = process.env.API_URL

export const createLink = async (req: Request, res: Response) => {
	const { source } = req.body;
	const newLink = await saveLink(source)

	return res.status(201).json(newLink)
}
export const redirectLink = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { cipher } = req.params
		const link = await getLinkWithCipher(cipher)
		if (link && link.source && API_URL) {

			const baseURL = (link.source.replace(API_URL, ''));
			const targetURL = baseURL.includes('http') ? baseURL : `https://${baseURL}`
			console.log(isURL(targetURL));

			if (isURL(targetURL)) {
				return res.redirect(targetURL)
			} else {
				return res.redirect('/')
			}
		} else {
			return res.status(400).json({ message: "Bad request" })
		}
	} catch (err) {
		next(err);
	}
}