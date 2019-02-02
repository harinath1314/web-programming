data = [{
"title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue","description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution","image": "1.jpeg","quantity":"10","price":12000},{"title": "Mi A2 4GB + 64GB | 6GB + 128GB","description": "15.2cm (5.99) large display","image": "2.jpeg","quantity":"20","price":10000},{"title": "Apple iphone 32GB","description": "11.4 cm(4.7)display","image": "3.jpeg","quantity":"30","price":26000},{"title": "red mi note 6 pro","description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ","image": "4.jpeg","quantity":"40","price":16000}]
var urlencodedParser = require('body-parser');
module.exports = function (app) {
    app.get('/catalog', function (req, res) {
        res.render('catalog', { catalog: data });
    });
    app.post('/catalog', urlencodedParser, function (req, res) {
        // for( i = 0; i < data.length -1; i++){
        //     data[i] = data[i + 1];
        //   }
        data.pop(0);
        res.json(data);
    });
    app.delete('/catalog/:item', function (req, res) {
        dat = dat.filter(function (data) {
            return data.item.replace(/ /g, '-') !== req.params.item;
        });
        // for( i = 0; i < data.length -1; i++){
        //     data[i] = data[i + 1];
        //   }
        res.json(dat);

    });
    
    

};
var del = require('./catalogfuns');
