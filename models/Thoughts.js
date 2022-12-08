import mongoose from 'mongoose'

/* thoughtschema will correspond to a collection in your MongoDB database. */
const Thoughtschema = new mongoose.Schema({
  title: {
    /* The name of this pet */
    type: String,
    required: [true, 'Please provide a name for this Thoughts.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
})

export default mongoose.models.Thoughts || mongoose.model('Thoughts', Thoughtschema)
