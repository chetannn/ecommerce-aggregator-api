const util = require('util')
const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname + '/../../public/uploads'))
    },
    filename: function(req, file, cb) {
        cb(null,  file.originalname + '-' + new Date().toDateString() + path.extname(file.originalname))
    }
})

const upload = multer({ storage }).single('file')
let uploadFileMiddleware = util.promisify(upload)
module.exports = uploadFileMiddleware