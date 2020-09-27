import Pharmacist from '../models/pharmacist'

export default class PharmacistService {
    
    public async create(body: any) {
        try {
            let pharmacist = await Pharmacist.create(body)

            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async update(id: any, body: any) {
        try {
            await Pharmacist.updateOne({_id: id}, {...body})

            let pharmacist = await Pharmacist.findOne({_id: id})

            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async get(id: any) {
        try {
            let pharmacist = await Pharmacist.findOne({_id: id})

            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let pharmacist = await Pharmacist.find()

            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async delete(id: any) {
        try {
            await Pharmacist.deleteOne({_id: id})

            return {success: true}
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}
