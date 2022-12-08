import { useRouter } from 'next/router'
import MdRender from './MdRender'
import useSWR from 'swr'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const PostView = ({ callBack }) => {
  const router = useRouter()
  const { id } = router.query
  const { data: thought, error } = useSWR(id ? `/api/thoughts/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!thought) return <p>Loading...</p>

  callBack(thought.date)

  return (
    <>
      <MdRender mdStr={thought.content}></MdRender>
    </>
  )
}

/* export async function getStaticPaths() {
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
} */

/* Retrieves thoughts data from mongodb database getServerSideProps*/
// export async function getServerSideProps({ params }) {
//   console.log(params, 111111111111)
//   await dbConnect()
//   const result = await Thoughts.findById(params.id).lean()
//   const { content, date } = result
//   /* const content = result.map((doc) => {
//     const curInfo = doc.toObject()
//     curInfo._id = curInfo._id.toString()
//     return curInfo
//   }) */
//   return { props: { content, date } }
// }

export default PostView
