import * as express from 'express'
import PatientController from './patientController'

const router = express.Router()

const patientController = new PatientController()

router.post('/', patientController.createPatient.bind(patientController))

router.post('/:id', patientController.updatePatient.bind(patientController))

router.get('/', patientController.getAllPatient.bind(patientController))

router.get('/:id', patientController.getPatient.bind(patientController))

router.get('/user/:userid', patientController.getPatientByUser.bind(patientController))

router.delete('/:id', patientController.deletePatient.bind(patientController))

export default router