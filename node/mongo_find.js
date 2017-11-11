var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost/test',function (err, db) {
	if(err) {
		throw err;
	}
	db.collection("products").find().toArray(function (err, items){
		console.log("데이터 개수: "+items.length);
		for(var i in items) {
			console.log(i+" : "+JSON.stringify(items[i]));
		}
		db.close();
	});
	
});