'use strict'

const { min } = require('mrp-utils')
const ui = require('mrp-ui')

function app() {
  console.log('app主入口')
  let minNum = min(2, 5)
  ui(minNum)
}

app()
