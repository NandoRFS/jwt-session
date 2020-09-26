import Pharmacist from '../models/pharmacistProfile'

export default class PharmacistController {
    
    public async createPharmacist(req: any, res: any) {
        try {
            let pharmacist = await Pharmacist.create(req.body)

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async updatePharmacist(req: any, res: any) {
        try {
            await Pharmacist.updateOne({_id: req.params.id}, {...req.body})

            let pharmacist = await Pharmacist.findOne({_id: req.params.id})

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getPharmacist(req: any, res: any) {
        try {
            let pharmacist = await Pharmacist.findOne({_id: req.params.id})

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getAllPharmacist(req: any, res: any) {
        try {
            let pharmacist = await Pharmacist.find()

            return res.json({pharmacist})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}
