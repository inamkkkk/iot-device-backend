const express = require('express');
const mongoose = require('mongoose');
const deviceRoutes = require('./routes/deviceRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB Connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/iot-data';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/devices', deviceRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});