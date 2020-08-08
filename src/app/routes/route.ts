import * as express from 'express'
import AuthController from '../controllers/authController'
import NeedsToBeAuthenticatedController from '../controllers/needsToBeAuthenticatedController'

const {version} = require('../../../package.json')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

const authController = new AuthController()
const needsToBeAuthenticatedController = new NeedsToBeAuthenticatedController()

router.get('/version', (req, res) => {
    return res.status(200).json({version, status: "Eu Amo a Erica <3"})
})

router.post('/register', authController.createUser.bind(authController))

router.post('/authenticate', authController.authenticate.bind(authController))

router.use(authMiddleware)

router.get('/needs-to-be-authenticated', needsToBeAuthenticatedController.getSomething.bind(needsToBeAuthenticatedController))

export = router