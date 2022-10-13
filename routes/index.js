const express = require("express")
const userController = require("../controller/userController")
const router = express.Router()

router.get('/register', userController.registerForm)
router.post('/register', userController.postRegister)

router.get('/login', userController.loginForm)
router.post('/login', userController.postLogin)

router.get('/logout', userController.getlogOut)

router.use(function (req, res, next) {
    if(!req.session.userId) {
        const error = "Please Login First"
        res.redirect(`/login?error=${error}`)
    } else {
        next()
    }
    // console.log(('Time:', Date.now()))
    // next()
})

router.get('/home', (req,res) => res.render('home'))

module.exports = router