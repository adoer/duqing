import dbConnect from '../lib/dbConnect'
import Info from '../models/Info'
// import HtmlRender from '../components/HtmlRender'
import PostList from '../components/PostList'
const Home = function ({ thoughts }) {
  return (
    <>
      {/* <HtmlRender html={thoughts[0].content} /> */}
      <PostList data={thoughts}></PostList>
    </>
  )
}

/* Retrieves thoughts data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Info.find({})
  const thoughts = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  })
  return { props: { thoughts: thoughts } }
}


export default Home