const express = require('express')

const json = require('./api.json')

const apiServer = function () {
  return [
    express.json(),
    express.urlencoded({ extended: true }),
    {
      route: '/api/',
      handle: function (req, res, next) {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(json))
      },
    },
  ]
}

module.exports = apiServer
