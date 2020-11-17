import Pharmacist from '../models/pharmacist'
import User from '../models/user'

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
            let user = await User.findOne({_id: pharmacist.user})
            pharmacist.user = user
            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getByUser(id: any) {
        try {
            let pharmacist = await Pharmacist.findOne({user: id})
            let user = await User.findOne({_id: pharmacist.user})
            pharmacist.user = user
            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let pharmacist = await Pharmacist.find()
            
            for(let p of pharmacist) {
                let user = await User.findOne({_id: p.user})
                pharmacist[pharmacist.indexOf(p)].user = user
            }
            
            return pharmacist
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async delete(id: any) {
        try {
            let pharmacist = await Pharmacist.findOne({_id: id})

            await Pharmacist.deleteOne({_id: id})
            await User.deleteOne({_id: pharmacist.user})

            return {success: true}
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}
