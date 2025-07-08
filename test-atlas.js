import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const testAtlasConnection = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.log('❌ No MONGODB_URI found in environment variables');
      console.log('💡 Create a .env file with your MongoDB Atlas connection string');
      console.log('📝 Example: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database');
      return;
    }

    console.log('🔗 Testing MongoDB Atlas connection...');
    console.log(`📍 URI: ${mongoURI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')}`); // Hide credentials
    
    const conn = await mongoose.connect(mongoURI);
    
    console.log('✅ MongoDB Atlas connection successful!');
    console.log(`🌐 Connected to: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Test basic operations
    const collections = await conn.connection.db.listCollections().toArray();
    console.log(`📁 Collections found: ${collections.length}`);
    
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB Atlas');
    
  } catch (error) {
    console.error('❌ MongoDB Atlas connection failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check your connection string format');
    console.log('2. Verify your IP is whitelisted in Atlas');
    console.log('3. Ensure your database user has correct permissions');
    console.log('4. Check if your cluster is running');
  }
};

testAtlasConnection(); 