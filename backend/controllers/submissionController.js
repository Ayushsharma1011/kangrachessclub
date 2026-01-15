import UserSubmission from '../models/UserSubmission.js';

// Handle public submission
export const createSubmission = async (req, res) => {
  try {
    const { name, contact, message } = req.body;
    const submission = new UserSubmission({ name, contact, message });
    await submission.save();
    res.status(201).json({ message: 'Submission received!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit', error: err.message });
  }
};

// Get all submissions (admin only)
export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await UserSubmission.find();
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching submissions' });
  }
};

// Approve a submission
export const approveSubmission = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await UserSubmission.findByIdAndUpdate(
      id,
      { isApproved: true }, // ✅ Corrected field
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Submission not found' });
    }

    res.status(200).json({ message: 'Approved', submission: updated });
  } catch (error) {
    console.error('❌ Error in approveSubmission:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
};


// Delete a submission
export const deleteSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    await UserSubmission.findByIdAndDelete(id);
    res.json({ message: 'Submission deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting submission' });
  }
};
