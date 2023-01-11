import { saveLink } from './../services/linkService.js';
import { Request, Response } from 'express'

export const createLink = async (req: Request, res: Response) => {
	const { source } = req.body;
	const newLink = await saveLink(source)

	return res.status(201).json(newLink)
}