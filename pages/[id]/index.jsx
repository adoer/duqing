import PageRender from '../../components/PageRender'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectDate } from '../../components/dateSlice'
// import { useEffect, useState, useRef } from 'react'
const PostView = () => {
  // const inputEl = useRef(null)

  const date = useSelector(selectDate)

  return (
    <>
      <div className='meta-line'>
        <div className="meta"><time>{date}</time></div>
        <Link className="back" href="/">Back</Link>
      </div>
      <PageRender />
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
  }
} */

/* Retrieves thoughts data from mongodb database getServerSideProps*/
// export async function getServerSideProps({ params }) {
//   await dbConnect()
//   const result = await Thoughts.findById(params.id).lean()
//   const { content, date } = result
//   /* const content = result.map((doc) => {
//     const curInfo = doc.toObject()
//     curInfo._id = curInfo._id.toString()
//     return curInfo
//   }) */
//   return { props: { id: params.id } }
//   // return { props: { content, date } }
// }

export default PostView
