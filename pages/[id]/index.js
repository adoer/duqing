import { useRouter } from 'next/router'
import HtmlRender from '../../components/HtmlRender'
import dbConnect from '../../lib/dbConnect'
import Thoughts from '../../models/Info'
import Link from 'next/link'
const PostView = ({ content, date }) => {
  const router = useRouter()
  const query = router.query
  return (
    <>
      <div className='meta-line'>
        <div className="meta"><time>{query.date || date}</time></div>
        <Link className="back" href="/">返回</Link>
      </div>
      {content && <HtmlRender html={content} />}
    </>
  )
}
export async function getStaticPaths() {
  await dbConnect()
  const result = await Thoughts.find({})
  const paths = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return { params: { id: curInfo._id } }
  })
  return {
    paths: paths,
    fallback: false // See the "fallback" section below
  };
}

/* Retrieves thoughts data from mongodb database getServerSideProps*/
export async function getStaticProps({ params }) {
  await dbConnect()
  const result = await Thoughts.findById(params.id).lean()
  const { content, date } = result
  /* const content = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  }) */
  return { props: { content, date } }
}

export default PostView
