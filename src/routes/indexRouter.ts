import { getHomePage } from './../controllers/indexController.js';
import { Router } from 'express'

export const indexRouter = Router()

indexRouter.get('/', getHomePage)