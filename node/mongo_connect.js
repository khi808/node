var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost/test',function (err, db) {
	if(err) {
		throw err;
	}
	console.log(db);
});