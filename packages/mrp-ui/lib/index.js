'use strict'

const chalk = require('chalk')
const { add } = require('mrp-utils')

function ui(result) {
  console.log('ui库，result入参:', result)
  console.log(chalk.red('ui库, 结果为：' + chalk.blue(add(result, 10))))
}

module.exports = ui
