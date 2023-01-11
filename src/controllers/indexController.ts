import { Request, Response } from 'express'
export const getHomePage = (req: Request, res: Response) => {
	return res.render('index')
}