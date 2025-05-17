import mongoose from 'mongoose';

const AcademicSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  course: { type: String, required: true },
  institution: { type: String, required: true },
  year: { type: String, required: true },
  percentage: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Academic', AcademicSchema);
