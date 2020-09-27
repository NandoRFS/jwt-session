import PharmacistService from '../services/pharmacistService'

export default class PharmacistController {
    private _pharmacistService: any

    constructor() {
        this._pharmacistService = new PharmacistService()
    }
    
    public async createPharmacist(req: any, res: any) {
        try {
            let pharmacist = await this._pharmacistService.create(req.body)

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async updatePharmacist(req: any, res: any) {
        try {
            await this._pharmacistService.update(req.params.id, req.body)

            let pharmacist = await this._pharmacistService.get(req.params.id)

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getPharmacist(req: any, res: any) {
        try {
            let pharmacist = await this._pharmacistService.get(req.params.id)

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getAllPharmacist(req: any, res: any) {
        try {
            let pharmacist = await this._pharmacistService.getAll()

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async deletePharmacist(req: any, res: any) {
        try {
            let pharmacist = await this._pharmacistService.delete(req.params.id)

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}
