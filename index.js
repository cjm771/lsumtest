const express = require('express');
//const path = require('path');
//const PORT = process.env.PORT || 5000;

var app = express();

app.get("/"), function(req, res){
	res.send("this is home");
});
app.get("/test", function(req, res){
	res.send("this is a test page.");	
})
/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/
