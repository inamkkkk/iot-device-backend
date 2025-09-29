const DeviceData = require('../models/DeviceData');

exports.receiveData = async (req, res) => {
  try {
    const { deviceId, temperature, humidity } = req.body;
    const newData = new DeviceData({
      deviceId,
      temperature,
      humidity,
      timestamp: new Date(),
    });
    await newData.save();
    res.status(201).json({ message: 'Data received and saved' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Failed to save data' });
  }
};