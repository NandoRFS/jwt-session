import * as express from 'express'
import AuthController from '../controllers/authController'

const {version} = require('../../package.json')

const router = express.Router()

const authController = new AuthController()

router.get('/version', (req, res) => {
    return res.status(200).json({version, status: "Eu Amo a Erica <3"})
})

router.post('/register', authController.createUser.bind(authController))


export = router