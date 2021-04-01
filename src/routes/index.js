const {
  TestController,
  AuthenticationController,
  UsersController,
  ProductsController,
  SourceController,
  CategoryLinksController
} = require('../controllers')

const auth = require('../middleware/auth')
const isAdmin = require('../middleware/admin')

module.exports = (app) => {
    app.get('/test', TestController.test),
    app.post('/auth/register', AuthenticationController.register),
    app.post('/auth/login', AuthenticationController.login),
    app.get('/auth/me', [auth], AuthenticationController.me),
    app.get('/users', [auth, isAdmin], UsersController.getAllUsers),
    app.get('/users/statistics', [auth, isAdmin], UsersController.getStatistics),
    app.put('/profile/update', [auth], UsersController.updateProfile),
    app.get('/products', [auth], ProductsController.getAllProducts),
    app.post('/products', [auth, isAdmin], ProductsController.createProduct)
    app.post('/products/bulk', [auth, isAdmin], ProductsController.createBulkProduct)
    app.post('/sources', [auth, isAdmin], SourceController.createSource)
    app.get('/sources', [auth], SourceController.getAll)
    app.get('/sources/statistics', [auth, isAdmin], SourceController.getStatistics)
    app.post('/profile/avatar', [auth], UsersController.uploadAvatar)
    app.delete('/users/:id', [auth, isAdmin], UsersController.deleteUser)
    app.get('/categoryLinks', [auth, isAdmin], CategoryLinksController.getAll)
    app.get('/categoryLinks/:id', [auth, isAdmin], CategoryLinksController.getById)
    app.delete('/categoryLinks/:id', [auth, isAdmin], CategoryLinksController.deleteCategoryLink)
    app.put('/categoryLinks/:id', [auth, isAdmin], CategoryLinksController.updateCategoryLink)

}