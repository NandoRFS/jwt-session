import * as express from 'express'
import AuthController from '../controllers/authController'
import NeedsToBeAuthenticatedController from '../controllers/needsToBeAuthenticatedController'
import PharmacistController from '../controllers/pharmacistController'

const {version} = require('../../../package.json')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

const authController = new AuthController()
const needsToBeAuthenticatedController = new NeedsToBeAuthenticatedController()
const pharmacistController = new PharmacistController()

router.get('/version', (req, res) => {
    return res.status(200).json({version, status: "Eu Amo a Erica <3"})
})

router.post('/register', authController.createUser.bind(authController))

router.post('/authenticate', authController.authenticate.bind(authController))

router.post('/forgot-password', authController.forgotPassword.bind(authController))

router.post('/reset-password', authController.resetPassword.bind(authController))

router.use(authMiddleware)

router.get('/needs-to-be-authenticated', needsToBeAuthenticatedController.getSomething.bind(needsToBeAuthenticatedController))

router.post('/pharmacist', pharmacistController.createPharmacist.bind(pharmacistController))

router.post('/pharmacist/:id', pharmacistController.updatePharmacist.bind(pharmacistController))

router.get('/pharmacist', pharmacistController.getAllPharmacist.bind(pharmacistController))

router.get('/pharmacist/:id', pharmacistController.getPharmacist.bind(pharmacistController))

export = router