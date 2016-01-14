var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://prashant:mongovision@ds037165.mongolab.com:37165/mongovision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}