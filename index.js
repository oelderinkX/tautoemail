const bodyParser = require('body-parser');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache( { stdTTL: 300, checkperiod: 301 } );

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const welcomeHtml = '<html><body><h1>Tauto Email</h1><p>Tauto Email will store any emails it received in cache for a short amoutn of time</p></body></html>';

module.exports = function(app) {
	app.get('/', urlencodedParser, function(req, res) {
		res.send(welcomeHtml);
	});
}