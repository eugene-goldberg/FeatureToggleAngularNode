const express = require('express');
const app = express();
const getAllRoutes = express.Router();

// Require Business model in our routes module
//let Business = require('../models/Business');

// Defined store route
// businessRoutes.route('/add').post(function (req, res) {
//   let business = new Business(req.body);
//   business.save()
//     .then(business => {
//       res.status(200).json({'business': 'business in added successfully'});
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
// });

// Defined get data(index or listing) route
getAllRoutes.route('/').get(function (req, res) {
//     Business.find(function (err, businesses){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(businesses);
//     }
//   });
console.log('getAllRoute');
r = req;
});

// Defined edit route
// getAllRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Business.findById(id, function (err, business){
//       res.json(business);
//   });
// });

//  Defined update route
// getAllRoutes.route('/update/:id').post(function (req, res) {
//     Business.findById(req.params.id, function(err, business) {
//     if (!business)
//       return next(new Error('Could not load Document'));
//     else {
//         business.person_name = req.body.person_name;
//         business.business_name = req.body.business_name;
//         business.business_gst_number = req.body.business_gst_number;

//         business.save().then(business => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// Defined delete | remove | destroy route


module.exports = getAllRoutes;