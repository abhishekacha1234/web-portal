import mongoose from 'mongoose';

const InternshipSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: { type: String, required: true },
  role: { type: String, required: true },
  duration: { type: String },
  description: { type: String }
}, { timestamps: true });

export default mongoose.model('Internship', InternshipSchema);
