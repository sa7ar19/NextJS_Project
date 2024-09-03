// pages/api/submit.js

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Get the data from the request body
      const {title, body, priority, id, user_email} = req.body;
  
      // Validate the data
      if (!name || !email) {
        res.status(400).json({ message: 'Title, body and priority are required' });
        return;
      }
  
      // Process the data (e.g., save it to a database)
      // For now, we'll just log it and send a response
      console.log('Received data:', {title, body, priority, id, user_email});
  
      // Send a success response
      res.status(200).json({ message: 'Data received successfully', data: {title, body, priority, id, user_email} });
    } else {
      // Handle any other HTTP method
      res.status(405).json({ message: 'Only POST requests are allowed' });
    }
  }
  