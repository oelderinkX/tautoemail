const bodyParser = require('body-parser');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 300, checkperiod: 301 } );

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

module.exports = function(app) {
	app.get('/', urlencodedParser, function(req, res) {
		console.log('received email');
		res.send(200, { response: 'success' });
	});
}