const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../handlers/auth")

router.post('/signin', signIn)
router.post('/signup', signUp)
router.get('/', (req, res)=> res.send("Hit"));

module.exports = router;