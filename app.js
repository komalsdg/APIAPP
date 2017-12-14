var express = require('express')
var http = require('http');
var mysql = require("mysql");
var bodyParser = require('body-parser');

//database connection
var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'test'
})

try {
	connection.connect();
	
} catch(e) {
	console.log('Error connecting database..\n');
}

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//Get all
app.get("/user",function(req,res){
	connection.query('SELECT * FROM user',function(err,rows,fields){
		
		if(!err)
			res.send(rows);
		else
			res.send(err);
	});
});

//Get by id
app.get("/userbyid/:id",function(req,res){
	connection.query('SELECT * FROM user where id =' + req.params.id,function(err,rows,fields){
		
		if(!err)
			res.send(rows);
		else
			res.send(err);
	});
});

//post
app.post("/adduser",function(req,res){
	var username = req.body.name;
	connection.query('INSERT INTO user (name) VALUES (?)',username,function(err,rows,fields){
		if(!err)
			res.json(rows);
		else
			res.json(err); 
	});
});

//put
app.put("/updateuser/:id",function(req,res,next){
	var data = [req.body.name,req.params.id];
	connection.query('UPDATE user SET name=? WHERE id = ?',data,function(err,rows,fields){
		if(!err)
			res.json(rows);
		else
			res.json(err);
	});
});

//delete
app.delete("/deleteuser/:id",function(req,res,next){
	connection.query('DELETE FROM user WHERE id = ?',req.params.id,function(err,rows,fields){
		if(!err)
			res.json(rows);
		else
			res.json(err);
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

//listening to server
var server = app.listen(4001,function(){
	console.log("Listening to port %s",server.address().port);
});
