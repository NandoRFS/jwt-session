import * as express from 'express'

const {version} = require('../../package.json')
const router = express.Router()

router.get('/', (req, res) => {
    return res.status(200).json({version, status: "OK"})
})

export default router