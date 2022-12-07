import dbConnect from '../lib/dbConnect'
import Info from '../models/Info'
import PostList from '../components/PostList'
const Home = function ({ thoughts }) {
  return (
    <>
      <PostList data={thoughts}></PostList>
    </>
  )
}

/* Retrieves thoughts data from mongodb database getStaticProps*/
export async function getStaticProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Info.find({}, { title: 1, date: 1 })
  const thoughts = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  })
  return { props: { thoughts } }
}


export default Home