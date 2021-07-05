const cheerio = require('cheerio')
const request = require('request')
const { OKDAM } = require('./config')
const { Product, CategoryLink } = require('../database/models')

class OkScrapper {

   scrap(categoryLink) {
    const urlToScrape = `${categoryLink.Source.url}${categoryLink.link}`

    request(urlToScrape, async (err, response, body) => {
      if (err) throw new Error(err)

      const $ = cheerio.load(body)
      const container = $(OKDAM.container)

      try {
        $(container).each(async function (idx, elem) {
          const productLink = $(this).find('a').attr('href')
          const imageUrl = $(this).find(OKDAM.imageUrl).data('src')
          const productName = $(this).find(OKDAM.productName).text().trim()
          const price = $(this).find(OKDAM.price).text().trim().replace('NPR', '').replace(',', '')

          const product = {
            productName,
            productLink,
            price,
            source: 'Okdam',
            sourceId: 2,
            imageUrl
          }

          console.log(product)

          await Product.create(product)

        })

        await CategoryLink.update({
          hasScrapped: true
        }, {
          where: {
            id: categoryLink.id
          }
        })

      }

      catch (e) {
        console.log(e)
      }

    })
  }
}

module.exports = OkScrapper




