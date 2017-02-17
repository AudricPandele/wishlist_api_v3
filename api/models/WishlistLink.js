/**
 * WishlistLink.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    link:{
      type: 'string',
      required: true
    },
    picture: {
      type: 'string'
    },
    description:{
      type: 'string'
    },
    title: {
      type: 'string'
    },
    rate: {
      type: 'integer'
    },
    color_rate: {
      type: 'string',
      defaultsTo : '4CAF50'
    },
    ordered: {
      type: 'boolean',
      defaultsTo: false
    },
    order: {
      type: 'integer',
      defaultsTo: 1
    },
    price: {
      type: 'float',
      defaultsTo: 0
    },
    devise: {
      type: 'string',
      defaultsTo: '$'
    },
    wishlist: {
      model: 'wishlist',
      required: true
    }
  }
};
