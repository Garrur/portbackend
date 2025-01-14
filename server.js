
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://Data:Random%403960@cluster0.llqj4.mongodb.net/Mentor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Routes
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});