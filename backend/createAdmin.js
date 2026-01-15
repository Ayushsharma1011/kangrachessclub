import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const hashedPassword = await bcrypt.hash('ayush1011', 10);

    const newAdmin = new Admin({
      username: 'ayush',
      password: hashedPassword,
    });

    await newAdmin.save();

    console.log('✅ Admin created successfully!');
  } catch (error) {
    console.error('❌ Error creating admin:', error.message);
  } finally {
    mongoose.disconnect();
  }
};

createAdmin();
