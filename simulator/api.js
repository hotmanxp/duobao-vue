import express from 'express'
const router = express.Router()

import Home from './API/home'

router.use('/home', Home)

export default router
