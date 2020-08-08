import * as express from 'express'
import * as bodyParser from 'body-parser'

import * as defaultRoutes from './app/routes/healthcheck'
import * as appRoutes from './app/routes/route'

class App {
    public app: express.Application

    constructor() {
        this.app = express()
        this.middleware()
        this.protectedRoutes()
        this.unProtectedRoutes()
    }

    middleware() {
        this.app.disable('x-powered-by')
        this.app.disable('etag')
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    protectedRoutes() {
        this.app.use('/', appRoutes)
    }

    unProtectedRoutes() {
        this.app.use('/', defaultRoutes)
    }

}

export default new App()