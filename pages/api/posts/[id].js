import data from '../../../lib/staticDB/posts.json'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req
  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const thoughts = data.find(el => el._id === id)
        if (!thoughts) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: thoughts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
