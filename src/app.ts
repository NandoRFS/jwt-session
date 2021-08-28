import * as express from 'express'
import * as bodyParser from 'body-parser'

import * as appRoutes from './routes/route'

const cors = require('cors');

class App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.middleware()
        this.protectedRoutes()
    }

    middleware() {
        this.app.disable('x-powered-by')
        this.app.disable('etag')
        this.app.use(cors())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    protectedRoutes() {
        this.app.use('/', appRoutes)
    }

}

export default new App()
