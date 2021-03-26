const { Product } = require('../database/models')

module.exports = {
  async getAllProducts(req, res) {
    try {
      //TODO: First get the total count from db
      const count = await Product.count()
      if(count ==  0) res.status(404).json({ message: 'products not found', data: products })
      
      const products = await Product.findAll({
        where: {
          // offset: 3,
        },
        limit: 5
      })

      res.json({ message: 'products found successfully', data: products })

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
