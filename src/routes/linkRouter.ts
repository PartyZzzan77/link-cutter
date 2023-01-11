import { createLink } from './../controllers/linkController.js';
import { Router } from 'express'

export const linkRouter = Router()

linkRouter.post('/', createLink)