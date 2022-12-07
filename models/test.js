const path = require('path')
const fs = require('fs')
const tPath = path.join(__dirname, '../mdSource/post')
fs.readdir(tPath, function (err, data) {
  if (err) throw err;
  console.log(data)
})