import mongoose from 'mongoose'

/* InfoSchema will correspond to a collection in your MongoDB database. */
const InfoSchema = new mongoose.Schema({
  name: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a name for this pet.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  age: {
    type: Number,
  },
  poddy_trained: {
    /* Boolean poddy_trained value, if applicable */
    type: Boolean,
  },
  diet: {
    /* List of dietary needs, if applicable */
    type: Array,
  },
})

export default mongoose.models.Info || mongoose.model('Info', InfoSchema)
