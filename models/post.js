import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true  },
  matric_No: { type: String, required: true },
  level: { type: String, required: true }
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema)     