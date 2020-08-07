import App from './app'

const port = process.env.NODE_PORT || '3000'

App.app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

module.exports = App.app
