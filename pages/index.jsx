import dbConnect from '../lib/dbConnect'
import Info from '../models/Info'
import HtmlRender from '../components/HtmlRender'
const Home = function ({ infos }) {
  return (
    <>
      <HtmlRender html={infos[0].name} />
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await Info.find({})
  const infos = result.map((doc) => {
    const curInfo = doc.toObject()
    curInfo._id = curInfo._id.toString()
    return curInfo
  })
  return { props: { infos: infos } }
}


export default Home