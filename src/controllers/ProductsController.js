const { Product } = require('../database/models')
const { Pagination } = require('../helpers/pagination')

module.exports = {
  async getAllProducts(req, res) {
    try {
      //TODO: First get the total count from db
      const count = await Product.count()
      if(count ==  0) return res.status(404).json({ message: 'products not found', data: null })

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
    catch(e) {
       res.send(400).send(e.message)
    }
  }
}
