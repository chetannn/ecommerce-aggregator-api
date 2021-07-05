const cheerio = require('cheerio')
const request = require('request')
const { SASTODEAL } = require('./config')
const { Product, CategoryLink } = require('../database/models')

class SastodealScrapper {

  scrap(categoryLink) {

    const urlToScrape = `${categoryLink.Source.url}${categoryLink.link}`

    request(urlToScrape, async (err, response, body) => {
      if (err) throw new Error(err)

      const $ = cheerio.load(response.body, {
        xml: {
          xmlMode: true
        }
      })

      $(SASTODEAL.container).each(async function (item, idx) {
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
          sourceId: 1,
          imageUrl: finalImageUrl
        }

        console.log('product::', product)

        await Product.create(product)

      })

      await CategoryLink.update({
        hasScrapped: true
      }, {
        where: {
          id: categoryLink.id
        }
      })


    })
  }
}

module.exports = SastodealScrapper
