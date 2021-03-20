const TestController = require('../controllers/TestController')
const AuthenticationController = require('../controllers/AuthenticationController')
const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')



module.exports = (app) => {
    app.get('/test', TestController.test),
    app.get('/users', [auth,isAdmin], TestController.getAllUsers),
    app.post('/auth/register', AuthenticationController.register),
    app.post('/auth/login', AuthenticationController.login)
    app.get('/auth/me', [auth], AuthenticationController.me)
}