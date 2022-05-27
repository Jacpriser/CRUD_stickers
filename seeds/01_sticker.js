const stickers = require('../stickers');

exports.seed = async function(knex, Promise) {
  return knex('sticker').del()
    .then(function () {
      return knex('sticker').insert(stickers);
    })
};
