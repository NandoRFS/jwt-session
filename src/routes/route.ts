import * as express from 'express'
import AuthRouter from '../app/auth/authRouter'
import PatientRouter from '../app/patient/patientRouter'
import HealthcheckRouter from './healthcheck'

const authMiddleware = require('../middlewares/auth')
const router = express.Router()

router.use('/version', HealthcheckRouter)

router.use('/auth', AuthRouter)

// Authentication verify
router.use(authMiddleware)

// Rotas que precisam estar autenticadas
router.use('/patient', PatientRouter)

export = router