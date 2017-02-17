/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


var passport = require ('passport');

function onPassportAuth(req, res, error, user, info)
{
    if (error) return res.serverError(error);
    if (!user) return res.serverError(error);

    return res.ok (
        {
            token : SecurityService.createToken(user),
            user:user
        }
    )
}


module.exports = {

    signin: function (req,res)
    {
        passport.authenticate('local',
        onPassportAuth.bind(this,req,res))(req,res);
    },
    signup : function (req,res) {
        User
            .create(_.omit(req.allParams(),'id'))
            .then(function(user){
                return {
                    user: user,
                    token: SecurityService.createToken(user)
                }

            })
            .then(res.created)
            .catch(res.serverError)
    },
    // isAuth: function (req, res){
    //   var tokenFront = req.param('token');
    //   var idFront = req.param('id');
    //   User.findOne({id:idFront},function(err,user){
    //     if (tokenFront == user.token) {
    //       console.log('is connected !');
    //       return res.ok();
    //     } else {
    //       console.log('ALERT Wrong user !');
    //       console.log(tokenFront);
    //       console.log(user.token); /* Le token n'est pas dans la bdd, le stocker si il faut que la fonction marche */
    //       return res.ok();
    //     }
    //   });
    //
    // }

};
