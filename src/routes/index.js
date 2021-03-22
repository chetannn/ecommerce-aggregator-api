const TestController = require('../controllers/TestController')
const AuthenticationController = require('../controllers/AuthenticationController')
const UsersController = require('../controllers/UsersController')
const ProductsController = require('../controllers/ProductsController')

const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')

module.exports = (app) => {
    app.get('/test', TestController.test),
    app.post('/auth/register', AuthenticationController.register),
    app.post('/auth/login', AuthenticationController.login),
    app.get('/auth/me', [auth], AuthenticationController.me),
    app.get('/users', [auth,isAdmin], UsersController.getAllUsers),
    app.get('/products', [auth], ProductsController.getAllProducts),
    app.post('/products', [auth,isAdmin], ProductsController.createProduct)
}