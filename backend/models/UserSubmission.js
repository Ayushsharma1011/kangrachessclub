import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  message: { type: String, required: true },
  imageUrl: { type: String }, // optional
  isApproved: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const UserSubmission = mongoose.model('UserSubmission', submissionSchema);
export default UserSubmission;
