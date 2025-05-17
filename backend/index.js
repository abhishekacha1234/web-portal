import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // CORS import
import { config } from 'dotenv';
import connectDB from './utils/db.js';
import Userroutes from './routes/Userroutes.js';
import academicRoutes from './routes/academicRoutes.js';
import internshipRoutes from './routes/internshipRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import skillRoutes from './routes/skillRoutes.js';

config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL (adjust if needed)
  credentials: true, // Allows credentials (cookies) to be sent
}));

// Routes
app.use("/api/user", Userroutes);
app.use('/api/academic', academicRoutes);
app.use('/api/internship', internshipRoutes);
app.use('/api/certificate', certificateRoutes);
app.use('/api/skill', skillRoutes);

// Testing API
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8000;

// Connect to DB and Start the Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server running at PORT ${PORT}`);
  });
});
