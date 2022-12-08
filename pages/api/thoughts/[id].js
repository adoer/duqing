import dbConnect from '../../../lib/dbConnect'
import Thoughts from '../../../models/Thoughts'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const thoughts = await Thoughts.findById(id)
        if (!thoughts) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: thoughts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const thoughts = await Thoughts.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!thoughts) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: thoughts })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedthoughts = await Thoughts.deleteOne({ _id: id })
        if (!deletedthoughts) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
