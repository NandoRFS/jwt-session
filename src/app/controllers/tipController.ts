import TipService from '../services/tipService'

export default class TipController {
    private _tipService: any

    constructor() {
        this._tipService = new TipService()
    }
    
    public async createTip(req: any, res: any) {
        try {
            let tip = await this._tipService.create(req.body)

            return res.json({tip})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async updateTip(req: any, res: any) {
        try {
            await this._tipService.update(req.params.id, req.body)

            let tip = await this._tipService.get(req.params.id)

            return res.json({tip})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getTip(req: any, res: any) {
        try {
            let tip = await this._tipService.get(req.params.id)

            return res.json({tip})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async getAllTip(req: any, res: any) {
        try {
            let tip = await this._tipService.getAll()

            return res.json({tip})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async deleteTip(req: any, res: any) {
        try {
            let tip = await this._tipService.delete(req.params.id)

            return res.json({tip})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
}
