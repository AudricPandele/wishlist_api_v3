/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,

    attributes: {
        email: {
            type: 'email',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        wishlists:{
            collection: 'wishlist',
            via: 'owner'
        },

        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            delete obj.createdAt;
            delete obj.updatedAt;
            /*  delete obj.id;*/
            return obj;
        }
    },
    beforeCreate: function (values, next) {
        SecurityService.hashPassword(values);
        next();
    },
    beforeUpdate: function (values, next) {
        SecurityService.hashPassword(values);
        next();
    }

};
