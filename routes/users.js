var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

Item = mongoose.model('item', ItemSchema);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/save_to_mongo_db', (req, res) => {
  const newItem = new Item({
    name: 'Yash Kumar'
  });

  newItem.save().then(item => res.redirect('/users/all'));
});



router.get('/all', (req, res) => {
  Item.find({}, function(err, items) {
    if (err) throw err;
    res.json(items);
  });
});

module.exports = router;
