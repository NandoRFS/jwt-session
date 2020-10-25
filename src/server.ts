import App from './app'

const port = process.env.SERVER_PORT || '8000'

App.app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

module.exports = App.app
