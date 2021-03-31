const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs')
const { OKDAM } = require('./config')

const url = 'https://www.okdam.com/category/mobile-accessories'

request(url, (err, response, body) => {
  if (err) throw new Error(err)

  const products = []
  const $ = cheerio.load(body)

  const container = $(OKDAM.container)
  $(container).each(function(idx, elem) {
      const productLink = $(this).find('a').attr('href')
      const imageUrl = $(this).find(OKDAM.imageUrl).data('src')
      const productName = $(this).find(OKDAM.productName).text().trim()
      const price = $(this).find(OKDAM.price).text().trim().replace('NPR', '').replace(',', '')
    
      const product = {
        productName,
        productLink,
        price,
        source: 'Okdam',
        imageUrl
      }
  
      products.push(product)
  })

  let productJSON = JSON.stringify(products)
  fs.writeFile('products-ok.json', productJSON, (err, data) => {
    if (err) throw new Error(err)
  })
  
})


