import mongoose from 'mongoose';

export const connectDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI, { 
            