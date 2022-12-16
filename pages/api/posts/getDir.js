
import data from '../../../lib/staticDB/posts.json'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req
  switch (method) {
    case 'GET':
      try {
        if (!data) {
          return res.status(400).json({ success: false })
        }
        const data1 = data.map(el => {
          return {
            title: el.title,
            date: el.date,
            _id: el._id,
          }
        })

        res.status(200).json({ success: true, data: data1 })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
