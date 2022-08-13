// @desc   Register new user
// @route  POST /api/users
// @access Public
const registerUser = (req,res)=>{
    res.json({messgae:'Register User'})
}
// @desc   Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = (req,res)=>{
    res.json({messgae:'Login User'})
}
// @desc   GET user data
// @route  GET /api/users/me
// @access Public
const getMe = (req,res)=>{
    res.json({messgae:'Get Me'})
}

module.exports =  {
    registerUser,
    loginUser,
    getMe
}