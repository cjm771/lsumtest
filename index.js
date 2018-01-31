const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

var app = express();

var helperUtils = {
	//validates string as a number
	validateNum: function(str){
		str ==  (typeof str == "string") ? str.trim() : str;
		var res = parseFloat(str);
		return str=="" || isNaN(parseFloat(res)) ? false : res;
	}
}

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: true}))
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get("/", function(req, res){
		res.render('pages/index');

	})
	.post("/test", function(req, res){
		res.setHeader('content-type', 'application/json');
		//retrieve nums if string
		var trueNums = {
			x: helperUtils.validateNum(req.body.x),
			y: helperUtils.validateNum(req.body.y)
		}
		//give error or sum
		var result = (trueNums.x===false || trueNums.y ===false) ? 
			"One or both of your numbers are invalid!" : 
			(trueNums.x+trueNums.y);
		
		res.send(JSON.stringify({
			_x: req.body.x, 
			_y: req.body.y, 
			parsedX: trueNums.x, 
			parsedY: trueNums.y, 
			sum: result}));
	})
	.listen(PORT);