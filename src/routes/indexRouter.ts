import { Router } from 'express'
import { getHomePage } from './../controllers/indexController.js';
import { redirectLink } from '../controllers/linkController.js';

export const indexRouter = Router()

indexRouter.get('/', getHomePage)
indexRouter.get('/:cipher', redirectLink)