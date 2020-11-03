import * as express from 'express'
import AuthController from '../controllers/authController'
import NeedsToBeAuthenticatedController from '../controllers/needsToBeAuthenticatedController'
import PharmacistController from '../controllers/pharmacistController'
import TipController from '../controllers/tipController'
import MedicationController from '../controllers/medicationController'
import PatientController from '../controllers/patientController'

const {version} = require('../../../package.json')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

const authController = new AuthController()
const needsToBeAuthenticatedController = new NeedsToBeAuthenticatedController()
const pharmacistController = new PharmacistController()
const tipController = new TipController()
const medicationController = new MedicationController()
const patientController = new PatientController()

router.get('/version', (req, res) => {
    return res.status(200).json({version, status: "Eu Amo a Erica <3"})
})

router.post('/register', authController.createUser.bind(authController))

router.post('/register/:id', authController.update.bind(authController))

router.post('/authenticate', authController.authenticate.bind(authController))

router.post('/forgot-password', authController.forgotPassword.bind(authController))

router.post('/reset-password', authController.resetPassword.bind(authController))

// NEEDS TO BE AUTHENTICATED

router.use(authMiddleware)

router.get('/needs-to-be-authenticated', needsToBeAuthenticatedController.getSomething.bind(needsToBeAuthenticatedController))

// PHARMACIST

router.post('/pharmacist', pharmacistController.createPharmacist.bind(pharmacistController))

router.post('/pharmacist/:id', pharmacistController.updatePharmacist.bind(pharmacistController))

router.get('/pharmacist', pharmacistController.getAllPharmacist.bind(pharmacistController))

router.get('/pharmacist/:id', pharmacistController.getPharmacist.bind(pharmacistController))

router.get('/pharmacist/user/:userid', pharmacistController.getPharmacistByUser.bind(pharmacistController))

router.delete('/pharmacist/:id', pharmacistController.deletePharmacist.bind(pharmacistController))

// TIPS

router.post('/tip', tipController.createTip.bind(tipController))

router.post('/tip/:id', tipController.updateTip.bind(tipController))

router.get('/tip', tipController.getAllTip.bind(tipController))

router.get('/tip/:id', tipController.getTip.bind(tipController))

router.delete('/tip/:id', tipController.deleteTip.bind(tipController))

// MEDICATION

router.post('/medication', medicationController.createMedication.bind(medicationController))

router.post('/medication/:id', medicationController.updateMedication.bind(medicationController))

router.get('/medication', medicationController.getAllMedication.bind(medicationController))

router.get('/medication/:id', medicationController.getMedication.bind(medicationController))

router.delete('/medication/:id', medicationController.deleteMedication.bind(medicationController))

// PATIENT

router.post('/patient', patientController.createPatient.bind(patientController))

router.post('/patient/:id', patientController.updatePatient.bind(patientController))

router.get('/patient', patientController.getAllPatient.bind(patientController))

router.get('/patient/:id', patientController.getPatient.bind(patientController))

router.delete('/patient/:id', patientController.deletePatient.bind(patientController))

export = router