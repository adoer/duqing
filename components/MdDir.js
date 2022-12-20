import { Anchor } from 'antd'
const { Link } = Anchor
const MdDir = ({ dir }) => {
  const getLink = (dir) => {
    return dir.map(ele => {
      return <Link
        href={`#${ele.text}`}
        title={ele.text}
        key={ele.ind}
      >
        {
          ele.children && getLink(ele.children)
        }
      </Link>
    })
  }
  return <div className='MdDir' >
    <Anchor affix={true}>
      {
        getLink(dir)
      }
    </Anchor>
  </div >
}
export default MdDir
