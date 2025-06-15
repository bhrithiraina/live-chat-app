const http = require('http');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./app');

dotenv.config(); // Load environment variables

const server = http.createServer(app); // HTTP server needed for Socket.IO
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
