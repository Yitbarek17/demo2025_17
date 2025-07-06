import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/database.js';
import Project from './models/Project.js';
import { sampleProjects } from './data/sampleData.js';
import projectRoutes from './routes/projects.js';
import metadataRoutes from './routes/metadata.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/metadata', metadataRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

// Initialize database and start server
const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Check if we need to seed the database
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      console.log('Seeding database with sample projects...');
      await Project.insertMany(sampleProjects);
      console.log(`Successfully inserted ${sampleProjects.length} sample projects`);
    } else {
      console.log(`Database already contains ${projectCount} projects`);
    }
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();