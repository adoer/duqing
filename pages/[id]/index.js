import { useRouter } from 'next/router'
import HtmlRender from '../../components/HtmlRender'
import Link from 'next/link'
const PostView = () => {
  const router = useRouter()
  const query = router.query
  return (
    <>
      <div className='meta-line'>
        <div className="meta"><time>{query.date}</time></div>
        <Link className="back" href="/">返回</Link>
      </div>
      <HtmlRender html={query.content} />
    </>
  )
}

export default PostView
