const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    var router = express.Router();
    const request = require('request');

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
  console.log('API_URL:  ' + process.env.API_URL);
  res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/getall', function(req, res) {
  res.json({ message: 'this is getall route' });  
  console.log('this is getall api route'); 

  request(process.env.API_URL, function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });

});

router.post('/addnew', function(req, res) {
  //res.json({ message: 'this is getall route' + req.body });  
  request.post(
    process.env.API_URL,
    {
      json: {
        requestId: req.body.requestId,
        application: req.body.application,
        component: req.body.component,
        feature: req.body.feature,
        on: req.body.isOn
      }
    },
    (error, res, body) => {
      if (error) {
        console.error(error)
        return
      }
      console.log(`statusCode: ${res.statusCode}`)
      console.log(body)
    }
  )
  console.log('this is getall route:     ' + req.body.application ); 
});

router.put('/updateexisting', function(req, res) {
  request.put(
    process.env.API_URL,
    {
      json: {
        requestId: req.body.requestId,
        application: req.body.application,
        component: req.body.component,
        feature: req.body.feature,
        on: req.body.isOn
      }
    },
    (error, res, body) => {
      if (error) {
        console.error(error)
        return
      }
      console.log(`statusCode: ${res.statusCode}`)
      console.log(body)
    }
  ) 
  console.log('this is getall api route'); 
});

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  console.log('Version '+version);
});