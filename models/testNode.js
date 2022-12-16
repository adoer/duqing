const path = require('path')
const { readdir } = require("fs")
const testNode = async () => {
  // console.log(__dirname)
  // const tPath = path.join(__dirname, './data')
  // console.log(__dirname, tPath)
  return new Promise((resolve, reject) => {
    readdir(__dirname, function (err, data) {
      if (err) throw err;
      resolve(data)
    })
  })
}

testNode().then((val) => console.log(val))

// export default testNode