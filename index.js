'use strict'

const inky = require('inky')
const cheerio = require('cheerio')
const extend = require('extend-shallow')

exports.name = 'inky'
exports.inputFormats = ['inky']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const {Inky} = inky

  const opts = typeof options === 'object' ? options : {}
  extend(opts, locals)

  // The same plugin settings are passed in the constructor
  const i = new Inky(options)
  const html = cheerio.load(str)

  // Now unleash the fury
  return i.releaseTheKraken(html, {justBody: true})
}
