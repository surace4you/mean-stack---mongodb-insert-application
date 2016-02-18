var express =require('express');
var app =express();
var mongojs =require('mongojs');
var db =mongojs('learn',['reg']);
// var db1 =mongojs('contactlist',['edu']);
// var db2 =mongojs('contactlist',['personal_info']);
// var db3 =mongojs('contactlist',['job']);


var bodyParser =require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// get start

// app.get('/contactlist', function (req, res) {
// 	console.log("i received a GET request")


// db.contactlist.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });

// app.get('/edu', function (req, res) {
// 	console.log("i received a GET request")
// db1.edu.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });

// app.get('/personal_info', function (req, res) {
// 	console.log("i received a GET request")
// db2.personal_info.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });

// app.get('/job', function (req, res) {
// 	console.log("i received a GET request")
// db3.job.find(function (err, docs){
// 	console.log(docs);
// 	res.json(docs);
// });
// });
// get end
// post start
app.post('/reg', function (req, res) {
	// console.log(res.body);

	db.reg.insert(req.body, function( err, docs){
		res.json(docs);
	});
});

// app.post('/edu', function (req, res) {
// 	console.log(res.body);

// 	db1.edu.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });

// app.post('/personal_info', function (req, res) {
// 	console.log(res.body);

// 	db2.personal_info.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });

// app.post('/job', function (req, res) {
// 	console.log(res.body);

// 	db3.job.insert(req.body, function( err, docs){
// 		res.json(docs);
// 	});
// });
// post end

app.listen(3000);
console.log("server runing port in 3000");