var mongoClient = require('mongodb').MongoClient;
mongoClient.connect('mongodb://localhost/test',function (err, db) {
	if(err) {
		throw err;
	}
	db.collection('products').insert({name:'notebook',price:2000},
			function(e) {
		if(e) {
			console.log("에휴"+e);
		} else {
			console.log("입력 성공");
		}
	});
	db.close();
});