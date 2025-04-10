const users = []; // in-memory

exports.getUsers = (req, res) => {
  let filtered = [...users];
  const { role, sortBy, page = 1, limit = 5 } = req.query;

  if (role) filtered = filtered.filter(u => u.role === role);
  if (sortBy) filtered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + +limit);

  res.json({
    page: +page,
    limit: +limit,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / limit),
    data: paginated
  });
};

exports.getUserById = (req, res) => {
  const user = users.find(u => u.id === +req.params.id);
  user ? res.json(user) : res.status(404).json({ error: 'Not found' });
};

exports.createUser = (req, res) => {
  const { name, email, role = 'user' } = req.body;
  const user = { id: users.length + 1, name, email, role };
  users.push(user);
  res.status(201).json(user);
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const i = users.findIndex(u => u.id === id);
  if (i === -1) return res.status(404).json({ error: 'Not found' });
  const { name, email } = req.body;
  users[i] = { id, name, email };
  res.json(users[i]);
};

exports.patchUser = (req, res) => {
  const user = users.find(u => u.id === +req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  Object.assign(user, req.body);
  res.json(user);
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const i = users.findIndex(u => u.id === id);
  if (i === -1) return res.status(404).json({ error: 'Not found' });
  const removed = users.splice(i, 1)[0];
  res.json({ message: 'Deleted', user: removed });
};

const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/generateToken');

exports.loginUser = (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = generateToken(user);
  res.json({ message: 'Logged in', token });
};
