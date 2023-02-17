import { useRouter } from 'next/router'
import MdRender from './mdRender/MdRender'
import MdDir from './MdDir'
import useSWR from 'swr'
import { Skeleton } from 'antd'
import { useDispatch } from 'react-redux'
import {
  updateDate,
} from './dateSlice'
import { useEffect, useState } from 'react'
const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const PageRender = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { id } = router.query
  const { data: thought, error } = useSWR(id ? `/api/posts/${id}` : null, fetcher)

  useEffect(() => {
    if (error) {
      setIsError(true)
    } else if (!thought) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
      dispatch(updateDate(thought.date))
    }
  })

  return (
    <>
      {
        isError ? <p> 404 Page Not Found 。</p > :
          isLoading ? <Skeleton paragraph={{ rows: 4 }} active /> :
            <div className='pageWrap'>
              <MdRender mdStr={thought && thought.content} />
              <MdDir dir={thought.dir} />
            </div>
      }

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

export default PageRender
