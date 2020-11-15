import PatientService from '../services/patientService'

export default class PatientController {
    private _patientService: any

    constructor() {
        this._patientService = new PatientService()
    }
    
    public async createPatient(req: any, res: any) {
        try {
            let patient = await this._patientService.create(req.body)

            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async updatePatient(req: any, res: any) {
        try {
            await this._patientService.update(req.params.id, req.body)

            let patient = await this._patientService.get(req.params.id)

            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getPatient(req: any, res: any) {
        try {
            let patient = await this._patientService.get(req.params.id)

            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getPatientByUser(req: any, res: any) {
        try {
            let patient = await this._patientService.getByUser(req.params.userid)
            console.log('PACIENTE', patient)
            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getAllPatient(req: any, res: any) {
        try {
            let patient = await this._patientService.getAll()

            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async deletePatient(req: any, res: any) {
        try {
            let patient = await this._patientService.delete(req.params.id)

            return res.json({patient})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}
