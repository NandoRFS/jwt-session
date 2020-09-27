import Medication from '../models/medication'

export default class MedicationService {
    
    public async create(body: any) {
        try {
            let medication = await Medication.create(body)

            return medication
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async update(id: any, body: any) {
        try {
            await Medication.updateOne({_id: id}, {...body})

            let medication = await Medication.findOne({_id: id})

            return medication
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async get(id: any) {
        try {
            let medication = await Medication.findOne({_id: id})

            return medication
        } catch(e) {
            console.log(e)
            throw e
        }
    }

    public async getAll() {
        try {
            let medication = await Medication.find()

            return medication
        } catch(e) {
            console.log(e)
            throw e
        }
    }
    
    public async delete(id: any) {
        try {
            await Medication.deleteOne({_id: id})

            return {success: true}
        } catch(e) {
            console.log(e)
            throw e
        }
    }
}
