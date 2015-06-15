var request = require('superagent');
var token = "asdqwe123";

exports.getToken = function(callback) {

    request
        .get('https://api.yamsafer.me/currencies/geo')
        .end(function(err, res) {
            callback(err, res.body);
        });

}