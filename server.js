const express = require('express');
const app = express();
const port = 3000;

// Sample data (replace with your data source)
const users = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Doe', age: 30 },
  { id: 3, name: 'Bob Smith', age: 22 },
];

// Endpoint to get just the name and age of all users
app.get('/api/users', (req, res) => {
  const simplifiedUsers = users.map(user => ({ name: user.name, age: user.age }));
  res.json({ users: simplifiedUsers });
});

// Endpoint to get details of a specific user by ID
app.get('/api/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find(user => user.id === userId);

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Endpoint to get details of a specific user by name
app.get('/api/users/name/:userName', (req, res) => {
  const userName = req.params.userName;
  const user = users.find(user => user.name.toLowerCase() === userName.toLowerCase());

  if (user) {
    res.json({ user });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
