import Tip from '../models/tip'

export default class TipService {
    
    public async create(body: any) {
        try {
            let tip = await Tip.create(body)

            return tip
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async update(id: any, body: any) {
        try {
            await Tip.updateOne({_id: id}, {...body})

            let tip = await Tip.findOne({_id: id})

            return tip
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async get(id: any) {
        try {
            let tip = await Tip.findOne({_id: id})

            return tip
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let tip = await Tip.find()

            return tip
        } catch(e) {
            console.log(e)
            throw e
        }
    }
    
    public async delete(id: any) {
        try {
            await Tip.deleteOne({_id: id})

            return {success: true}
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}
