var express = require('express');
const axios = require('axios')
var router = express.Router();

/* GET csv listing. */
router.post('/', async (req, res, next) => {
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
