module.exports = (req,res,next) => {
    if(req.cookies.cicloMundo_user_user){
        req.session.userLogin = req.cookies.cicloMundo_user_user
    }

    next()
}