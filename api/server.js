const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    var router = express.Router();

const businessRoute = require('./routes/business.route');
const getAllRoutes = require('./routes/getall.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Cannot connect to the database'+ err)}
);
var version=process.env.version || "1.0"

const app = express();
app.use(bodyParser.json());
// app.use(cors());
app.use(express.static(path.join(__dirname,'../dist/')));

app.get('/getversion',function(req,res){
  console.log('Version '+version);
  res.status(200).json({version:version})
});
app.use('/business', businessRoute);

app.use('/api', router);

// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,'../dist/','index.html'))
// });

app.get('/', function(req, res){
  res.render(path.join(__dirname,'../dist/','index.html'));
});

// app.use('/getall', function(req, res){
//   console.log('/getall');
// });

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/getall', function(req, res) {
  res.json({ message: 'this is getall route' });  
  console.log('this is getall api route'); 
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  console.log('Version '+version);
});