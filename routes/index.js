var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', async function(req, res, next) {
  const { body } = req;
  console.log(body)

  if(body.url) {
    const {data} = await axios.get(body.url)
    res.send(data);
  }else {
    res.send('respond with a resource');
  }
});
module.exports = router;
