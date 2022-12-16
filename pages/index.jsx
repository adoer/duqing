import posts from '../lib/staticDB/noContent.json'
// import Thoughts from '../models/Thoughts'
import PostList from '../components/PostList'
// import useSWR from 'swr'
/* const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data) */
const Home = function ({ thoughts }) {
  // const { data, error } = useSWR(`/api/posts/getDir`, fetcher)
  return (
    <>
      {/* {data && <PostList data={data}></PostList>} */}
      <PostList data={thoughts}></PostList>
    </>
  )
}

/* Retrieves thoughts data from mongodb database getStaticProps*/
export async function getStaticProps() {

  return { props: { thoughts: posts } }
}

/* Retrieves thoughts data from mongodb database getStaticProps*/
/* export async function getStaticProps() {
  await dbConnect()

  const result = await Thoughts.find({}, { title: 1, date: 1 })
  const thoughts = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  })
  return { props: { thoughts } }
} */


export default Home