const path = require('path')
const fs = require("fs")
let [dirArr, data, otherData] = [[], [], []]

// 递归过去目录下的所有文件路径
const getDirTree = (inputPath, callback) => {
  let files = fs.readdirSync(inputPath, 'utf8')
  files.forEach(el => {
    let filePath = inputPath + '\\' + el
    let fileState = fs.statSync(filePath)
    if (fileState.isDirectory()) { // 如果是目录 递归
      getDirTree(filePath)
    } else {
      // 过滤文件
      if (/\.md/.test(filePath)) {
        dirArr.push(filePath)
      }
    }
  })
  callback && callback.call()
}

const handleFileData = () => {
  // console.log(__dirname) //当前脚本执行时的目录
  const tPath = path.join(__dirname, './posts')
  getDirTree(tPath)
  dirArr.forEach((el, i) => {
    let fileData = fs.readFileSync(el, 'utf8')
    let lastIndex = fileData.lastIndexOf('---')
    let head = fileData.slice(0, lastIndex)
    let md = fileData.slice(lastIndex + 3)
    head = head.replaceAll('---', '').trim()
    md = md.trim()

    let allObj = {}
    head = head.split('\r')
    head.forEach(e => {
      const curVal = e.split(':')
      const keyVal = curVal[0].trim()
      let val = curVal[1].trim()
      if (/]/.test(val)) {
        val = val.slice(1, -1).split(',')
        val = val.map(m => m.trim())
      }
      allObj[keyVal] = val
    })
    allObj['_id'] = "post-" + (i + 1)
    otherData.push(JSON.parse(JSON.stringify(allObj)))
    // 包含content
    allObj['content'] = md
    data.push(allObj)
  })
  data = JSON.stringify(data, (key, val) => {
    if (key === 'content') {
      // 将需要换行的地方统统替换成"  \r\n"
      return val.replace(/\s*(\r\n)+/g, "  \r\n")
    }
    return val
  })
  otherData = JSON.stringify(otherData)
  fs.writeFileSync(path.join(__dirname, './posts.json'), data, 'utf8')
  fs.writeFileSync(path.join(__dirname, './noContent.json'), otherData, 'utf8')
}
handleFileData()