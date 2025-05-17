import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  issuingOrganization: { type: String, required: true },
  issueDate: { type: String },
  credentialId: { type: String },
  credentialURL: { type: String }
}, { timestamps: true });

export default mongoose.model('Certificate', CertificateSchema);
