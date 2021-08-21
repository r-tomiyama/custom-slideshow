'use strict'

exports.up = function (db) {
  db.createTable('image', {
    id: { type: 'int', primaryKey: true, autoIncrement: true },
    url: { type: 'text', notNull: true },
  })

  return null
}

exports.down = function (db) {
  db.dropTable('image')

  return null
}

exports._meta = {
  version: 1,
}
