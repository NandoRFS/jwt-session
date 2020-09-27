import MedicationService from '../services/medicationService'

export default class MedicationController {
    private _medicationService: any

    constructor() {
        this._medicationService = new MedicationService()
    }
    
    public async createMedication(req: any, res: any) {
        try {
            let medication = await this._medicationService.create(req.body)

            return res.json({medication})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async updateMedication(req: any, res: any) {
        try {
            await this._medicationService.update(req.params.id, req.body)

            let medication = await this._medicationService.get(req.params.id)

            return res.json({medication})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getMedication(req: any, res: any) {
        try {
            let medication = await this._medicationService.get(req.params.id)

            return res.json({medication})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getAllMedication(req: any, res: any) {
        try {
            let medication = await this._medicationService.getAll()

            return res.json({medication})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async deleteMedication(req: any, res: any) {
        try {
            let medication = await this._medicationService.delete(req.params.id)

            return res.json({medication})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}
