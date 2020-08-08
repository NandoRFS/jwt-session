import * as express from 'express'

const {version} = require('../../../package.json')

const router = express.Router()

router.get('/version', (req, res) => {
    return res.status(200).json({version, status: "Eu Amo a Erica <3"})
})

export = router