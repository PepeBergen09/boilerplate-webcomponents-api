var express = require('express');
var router = express.Router();
const { getData, getAdress, postData } = require('../controllers/data')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ title: 'Express app' });
});

router.get('/data', getData );
router.get('/data/address', getAdress );
router.post('/data', postData);

module.exports = router;



