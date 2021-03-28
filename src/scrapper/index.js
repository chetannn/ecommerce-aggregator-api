const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const { SASTODEAL } = require('./config')

const url = 'https://www.sastodeal.com/electronic/televisions/samsung.html'

request(url, (err, response, body) => {
  if (err) throw new Error(err)

  const products = []
  const $ = cheerio.load(response.body, {
    xml: {
      xmlMode: true
    }
  })
  $(SASTODEAL.container).each(function (item, idx) {
    const productName = $(this)
      .find(SASTODEAL.productName)
      .text()
      .trim()

    const price = $(this).find(SASTODEAL.price).data('price-amount')
    const productLink = $(this).find(SASTODEAL.productLink).attr('href')
    const imageUrl = $(this).find(SASTODEAL.imageUrl).html()

    const finalImageUrl = imageUrl
      .split('\n')[0]
      .split(' ')[3]
      .split('=')[1]
      .split('"')[1]

    const product = {
      productName,
      productLink,
      price,
      source: 'Sastodeal',
      imageUrl: finalImageUrl
    }

    products.push(product)
  })
  
  let productJSON = JSON.stringify(products)
  fs.writeFile('products.json', productJSON, (err, data) => {
    if (err) throw new Error(err)
  })
})
