import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skillName: { type: String, required: true },
  proficiencyLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Skill', SkillSchema);
