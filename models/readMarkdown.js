const path = require('path')
import { readdir } from 'fs'
const readMarkdown = async () => {



  return new Promise((resolve, reject) => {
    readdir(__dirname, function (err, data) {
      if (err) throw err;
      resolve(data.join(', '))
    })
  })
}

export default readMarkdown