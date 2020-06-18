const express = require('express');
const router = express.Router();

//@route  GET apo/users
//@desc   Test route
//@acess  Public

router.get('/', (req, res) => res.send('user route'));

module.exports=router;