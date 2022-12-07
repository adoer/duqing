import { useRouter } from 'next/router'
import HtmlRender from '../../components/HtmlRender'
import dbConnect from '../../lib/dbConnect'
import Thoughts from '../../models/Info'
import testNode from '../../models/testNode'
import Link from 'next/link'
const PostView = ({ content, date, test }) => {
  const router = useRouter()
  const query = router.query
  return (
    <>
      <div className='meta-line'>
        <div className="meta"><time>{query.date || date}</time></div>
        <Link className="back" href="/">返回</Link>
      </div>
      {test}
      {content && <HtmlRender html={content} />}
    </>
  )
}

/* Retrieves thoughts data from mongodb database */
export async function getServerSideProps({ params }) {
  const test = await testNode()

  await dbConnect()

  /* find all the data in our database */
  const result = await Thoughts.findById(params.id).lean()
  const { content, date } = result
  /* const content = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  }) */
  return { props: { content, date, test } }
}

export default PostView
