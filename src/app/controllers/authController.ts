import User from '../models/user'
import prhtml from '../views/emails/passwordRecovery'
import PatientService from '../services/patientService'

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const mailer = require('../../modules/mailer')
const authConfig = require('../../config/auth')

export default class AuthController {
    private _patientService: any

    constructor() {
        this._patientService = new PatientService()
    }
    
    public generateToken(params = {}) {
        return jwt.sign(params, authConfig.secret, {
            expiresIn: 36000
        })
    }

    public async getUserByCpf(req: any, res: any) {
        try {
            let user = await this._patientService.getAll()

            console.log(user)
            user = user.filter(u => u.user.cpf == req.params.cpf)
            if(user.length > 0) {
                user = user[0]
                return res.json({user})
            } else {
                return res.status(400).send({error: 'Usuá não encontrado!'})
            }
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }
    
    public async createUser(req: any, res: any) {
        try {
            let user = await User.create(req.body)

            user.password = undefined

            return res.json({
                user, 
                token: this.generateToken({ id: user.id }) 
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async update(req: any, res: any) {
        try {
            
            if(req.body.password) {
                const user = await User.findOne({ _id:  req.params.id})

                user.password = req.body.password
                user.passwordRegistered = true

                await user.save()

                return res.json({user})
            }

            await User.updateOne({_id: req.params.id}, req.body)

            let user = await User.findOne({_id: req.params.id})

            return res.json({user})
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async authenticate(req: any, res: any) {
        try {
            const { cpf, password } = req.body

            const user = await User.findOne({ cpf }).select(`+password`)

            if(!user)
                throw 'User not found!'

            if(!await bcrypt.compare(password, user.password))
                throw 'Invalid password!'

            user.password = undefined

            return res.json({
                user, 
                token: this.generateToken({ id: user.id }) 
            })
        } catch(e) {
            console.log(e)
            return res.status(400).send({error: e})
        }
    }

    public async forgotPassword(req: any, res: any) {
        const { cpf } = req.body

        try {
            const user = await User.findOne({ cpf }).select('+password')

            if(!user)
                throw 'User not found!'

            const token = crypto.randomBytes(20).toString('hex')
            
            const now = new Date();
            now.setHours(now.getHours()+1)

            await User.findByIdAndUpdate(user.id, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpires: now
                }
            })

            console.log(user.email)

            mailer.sendMail({
                to: user.email,
                from: 'AppName <noreply@tcc.edu.br>',
                html: prhtml(token, user.name)

            }, (err) => {
                if (err)
                    throw 'Cannot send forgot password email'
            
                return res.json({status: 'OK!'})
            })

        } catch(e) {
            console.error(e)
            return res.status(400).send({ error: e })
        }
    }

    public async resetPassword(req: any, res: any) {
        const { cpf, token, password } = req.body

        try {
            const user = await User.findOne({ cpf }).select('+passwordResetToken passwordResetExpires')

            if(!user)
                throw 'User not found!'

            if(token !== user.passwordResetToken)
                throw 'Inválid token!'

            const now = new Date()

            if (now > user.passwordResetExpires)
                throw 'Token expired, generate a new one.'

            user.password = password

            await user.save()

            return res.send()

        } catch(e) {
            return res.status(400).send({ error: e })
        }
    }

}
