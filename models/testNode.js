const path = require('path')
import { readdir } from 'fs'
const testNode = async () => {
  // console.log(__dirname)
  // const tPath = path.join(__dirname, '../public')
  // console.log(__dirname, tPath)
  return new Promise((resolve, reject) => {
    readdir(__dirname, function (err, data) {
      if (err) throw err;
      resolve(data)
    })
  })
}

export default testNode