/*const express = require('express');
const router = express.Router();
const { check, validationResult } = required('express-validator/check');

/*
//@route  GET apo/users
//@desc   Test route
//@acess  Public

router.get('/', (req, res) => res.send('user route'));

module.exports=router;

*/

//@route  POST apo/users
//@desc   Register route
//@acess  Public

/*
router.post('/', 
[
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('passowrd',
    'Please enter a password with 6 or more characters').isLength({min: 6})


],
(req, res) =>{
    const errors = ValidationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    console.log(req.body);
    res.send('User route');
});

module.exports= router;
