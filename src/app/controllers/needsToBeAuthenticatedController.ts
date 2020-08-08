
export default class NeedsToBeAuthenticatedController {
    public getSomething(req, res) {
        return res.status(200).json({status: 'Ok!'})
    }
}
