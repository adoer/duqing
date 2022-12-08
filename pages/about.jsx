import MdRender from '../components/MdRender'
const str = `\`\`\`html
{
  "name": "Du Qing",
  "Github": "https://github.com/adoer",
  "blog": ["www.duqing.ink", "www.xerduo.com"],
  "email": ["i@duqing.ink", "duqingbetter@qq.com"],
}
\`\`\``
const about = function () {
  return (
    <div id='aboutme'>
      <MdRender mdStr={str}></MdRender>
    </div>
  )
}
export default about