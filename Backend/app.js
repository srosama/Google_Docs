const dotenv = require('dotenv');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/api/swagger.json');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

// Routes
const authRoutes = require('./src/routes/authRoutes');
const dashboardRoutes = require('./src/routes/dashboardRoutes');
const documentRoutes = require('./src/routes/documentRoutes');
const colors = require('colors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Default port if environment variable is not set

// Connect to MongoDB
async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.CONNECTMONGO);
    console.log(`MongoDB connected at ${mongoose.connection.host}`.bgGreen.white);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    console.error('Stack trace:', err.stack);
    process.exit(1);
  }
}


connectToMongoDB();


// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/documents', documentRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something broke!', error: err.message });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
