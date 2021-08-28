import * as express from 'express'
import AuthController from './authController'

const router = express.Router()

const authController = new AuthController()

router.post('/register', authController.createUser.bind(authController))

router.post('/register/:id', authController.update.bind(authController))

router.get('/user/:cpf', authController.getUserByCpf.bind(authController))

router.post('/authenticate', authController.authenticate.bind(authController))

router.post('/forgot-password', authController.forgotPassword.bind(authController))

router.post('/reset-password', authController.resetPassword.bind(authController))

export default router