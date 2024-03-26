// Filename - server.js

// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
mongoose.connect('mongodb+srv://meghananelapati681:iWnoxcLKcSyZELot@newsletter.7icj8wd.mongodb.net/testt?retryWrites=true&w=majority&appName=Newsletter', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error.message);
});

// Define schema for the form details
const FormDetailsSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  contactNumber: String,
  comments: String,
  checkbox: String,
  date: {
    type: Date,
    default: Date.now
  }
});

// Create model for the form details
const FormDetails = mongoose.model('FormDetails', FormDetailsSchema);

// Schema for users of app
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Create model for user
const User = mongoose.model('User', UserSchema);

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('App is Working');
});

// Route to handle form submission from newsletter/sponsor page
app.post('/submit-form', async (req, res) => {
  try {
    const formData = req.body; // Get form data from request body
    const result = await FormDetails.create(formData); // Create new document in FormDetails collection
    console.log('Form submitted:', result);
    res.status(200).send('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error.message);
    res.status(500).send('Something went wrong');
  }
});

// Route to handle registration from newsletter/sponsor page
app.post('/register-user', async (req, res) => {
  try {
    const { email } = req.body; // Destructure email from req.body
    const user = new User({ email }); // Create user with email only
    const result = await user.save();
    res.json(result);
    console.log('User registered:', result);
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).send('Something went wrong');
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
