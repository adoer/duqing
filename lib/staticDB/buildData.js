const path = require('path')
const fs = require("fs")
const { pid } = require('process')
let [data, otherData, rssStr] = [[], [], '']

// 递归过去目录下的所有文件路径
const getDir = (inputPath) => {
  let dirArr = []
  const getDirTree = (inputPath) => {
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
  }
  getDirTree(inputPath)
  return dirArr
}

// 处理markdown数据
const handleMdData = () => {
  // console.log(__dirname) //当前脚本执行时的目录
  const tPath = path.join(__dirname, './posts')
  const dirArr = getDir(tPath)
  dirArr.forEach((el, i) => {
    let fileData = fs.readFileSync(el, 'utf8')
    let lastIndex = fileData.indexOf('---', 16)
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
    allObj['_id'] = allObj.title
    otherData.push(JSON.parse(JSON.stringify(allObj)))
    // 包含content
    /* for (let k = 0, l = 7; k < l; k++) {
      md += md
    } */
    allObj['content'] = md

    // 解析目录
    let mdDir = md.split('\r')
    mdDir = mdDir.map(k => k.trim())
    mdDir = mdDir.filter(n => n.indexOf("#") === 0)
    mdDir = mdDir.map(t => {
      const tArr = t.split('# ')
      const level = tArr[0].length + 1
      return {
        level,
        text: tArr[1]
      }
    })

    // allObj['dir'] = mdDir

    const getDoc = (doc) => {
      let res = []
      const docHandle = (curDoc, curRes, pInd) => {
        let min = 100
        for (let item of curDoc) {
          min = item.level < min ? item.level : min
        }
        let minIndexArr = [] // [0,3,5]
        curDoc.forEach((el, index) => {
          if (el.level === min) {
            minIndexArr.push(index)
          }
        })
        minIndexArr.forEach((el, index) => {
          let end = minIndexArr[index + 1] || curDoc.length
          let secDoc = curDoc.slice(el, end)
          if (secDoc.length > 1) { //还有children
            curRes[index] = {
              ...secDoc[0],
              ind: pInd ? pInd + '.' + (index + 1) : index + 1,
              children: []
            }
            docHandle(secDoc.slice(1), curRes[index].children, curRes[index].ind)
          } else {
            curRes[index] = {
              ...secDoc[0],
              ind: pInd ? pInd + '.' + (index + 1) : index + 1,
            }
          }
        })

      }
      docHandle(doc, res, null)
      return res
    }

    allObj['dir'] = getDoc(mdDir)
    // allObj['dir'] = mdDir


    data.push(allObj)

    rssStr += `<item>
          <title><![CDATA[${allObj.title}]]></title>
          <description>
            <![CDATA[${allObj.content}]]>
          </description>
          <link>/${allObj._id}</link>
          <guid isPermaLink="true">/${allObj._id}</guid>
          <dc:creator><![CDATA[Du]]></dc:creator>
          <pubDate>${allObj.date}</pubDate>
        </item>`

  })

  // 按照时间降序排序
  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  otherData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // rss
  let feedData = fs.readFileSync(path.join(__dirname, './feed.tpl'), 'utf8')
  rssStr = feedData.replace(/<!--start-->[\S\s]*<!--end-->/, rssStr)
  rssStr = rssStr.replace(/<lastBuildDate>[\S\s]*<\/lastBuildDate>/, `<lastBuildDate>${otherData[0].date}</lastBuildDate>`)


  // 多加一些数据测试页面卡不卡
  /* for (let k = 0, l = 200; k < l; k++) {
    data[k] = JSON.parse(JSON.stringify(data[0]))
    data[k]['_id'] = "post-" + k
    otherData[k] = JSON.parse(JSON.stringify(otherData[0]))
    otherData[k]['_id'] = "post-" + k
  } */

  data = JSON.stringify(data, (key, val) => {
    if (key === 'content') {
      // 将需要换行的地方统统替换成"  \r\n"
      return val.replace(/\s*(\r\n)+/g, "  \r\n")
      // return val.replace(/\s*(\r\n)+/g, "")
    }
    return val
  })

  otherData = JSON.stringify(otherData)

  // data = 'export default \r   ' + data;
  // fs.writeFileSync(path.join(__dirname, './posts.js'), data, 'utf8')
  fs.writeFileSync(path.join(__dirname, './posts.json'), data, 'utf8')
  fs.writeFileSync(path.join(__dirname, './noContent.json'), otherData, 'utf8')
  fs.writeFileSync(path.join(__dirname, '../../public/feed.xml'), rssStr, 'utf8')
}

handleMdData()