const cheerio = require('cheerio')
const request = require('request')
const fs  = require('fs')

const url = 'https://www.sastodeal.com/electronic/televisions/samsung.html'

request(url, (err, response, body) => {
    if(err) throw new Error(err)

    const products = []
    const $ = cheerio.load(response.body, {
        xml: {
            xmlMode: true
        }
    })
    $(`#maincontent > .columns > div.column.main > #amasty-shopby-product-list > .products-grid > ol > li`)
    .each(function (item, idx) {
        const productName = $(this).find('div.product-item-details > strong > a').text().trim()
        const price = $(this).find(`div.product-item-details > div.price-final_price > span.pricenew > span.price-final_price > span.price-wrapper`).data('price-amount')
        const productLink = $(this).find('div.product-item-info > a').attr('href')
        const imageUrl = $(this).find('div.product-item-info > a > span.product-image-container > span.product-image-wrapper').html()
        const finalImageUrl = imageUrl.split('\n')[0].split(' ')[3].split('=')[1].split('"')[1]

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
        if(err) throw new Error(err)
    })
})