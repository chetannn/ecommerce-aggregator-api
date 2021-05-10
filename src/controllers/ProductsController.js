const { Product, FavoriteProduct, User } = require('../database/models')
const { Pagination } = require('../helpers/pagination')

module.exports = {
  async getAllProducts(req, res) {
    try {
      //TODO: First get the total count from db
      const count = await Product.count()
      if (count == 0) return res.status(404).json({ message: 'products not found', data: null })

      const paginationInstance = new Pagination(count)
      paginationInstance.paginate(+req.query.page, +req.query.perPage)

      //TODO: Calculate the offset and limit
      const offset = (paginationInstance.currentPage - 1) * paginationInstance.perPage
      const limit = paginationInstance.perPage

      const products = await Product.findAll({
        where: {
        },
        offset,
        limit
      })

      paginationInstance.items = products

      res.json({ message: 'products found successfully', data: paginationInstance })

    } catch (e) {
      res.status(400).send(e.message)
    }
  },
  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body)

      res
        .status(201)
        .json({ message: 'product created', data: product.toJSON() })
    } catch (e) {
      res.status(400).send(e.message)
    }
  },
  async createBulkProduct(req, res) {
    try {
      await Product.bulkCreate(req.body)

      res
        .status(201)
        .json({ message: 'bulk products created' })
    }
    catch (e) {
      res.status(400).send(e.message)
    }
  },
  async favoriteProduct(req, res) {
    const productId = +req.params.id

    try {

      const product = await Product.findOne({
        where: {
          id: productId
        }
      })

      if (product == null) res.status(404).json({ message: 'product not found', data: null })

      //TODO: save to favorites table
      let favorite = await FavoriteProduct.findOne({
        where: {
          userId: req.user.id,
          productId: product.id
        }
      })

      if (favorite !== null) return res.status(400).json({ message: 'Product already added to favorite', data: favorite.toJSON() })

      favorite = await FavoriteProduct.create({
        userId: req.user.id,
        productId: product.id
      })

      return res
        .status(201)
        .json({ message: 'Product Added to Favorite', data: favorite.toJSON() })

    }

    catch (e) {
      res.status(400).send(e.message)
    }
  },
  async unfavoriteProduct(req, res) {

    const productFavId = +req.params.id

    try {
      let favorite = await FavoriteProduct.findOne({
        where: {
          id: productFavId
        }
      })

      if (favorite == null) return res.status(404).json({ message: 'Product favorite not found', data: null })

      await favorite.destroy()
      return res.status(200).json({ message: 'Favorite Product Delete Successfully', success: true })
    }
    catch (e) {
      res.status(400).send(e.message)
    }
  },
  async getAllFavoriteProducts(req, res) {
    let favorites = await FavoriteProduct.findAll({
      include:
      {
        // include: [FavoriteProduct],
        model: Product
      },
      where: {
        userId: req.user.id
      }
    })
    return res.status(200).json({ data: favorites })
  }
}
