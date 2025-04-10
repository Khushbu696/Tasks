const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
  loginUser
} = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

router.get('/', protect, getUsers);
router.get('/:id', protect, getUserById);
router.post('/', createUser);
router.put('/:id', protect, updateUser);
router.patch('/:id', protect, patchUser);
router.delete('/:id', protect, authorize('admin'), deleteUser);
router.post('/login', loginUser);

module.exports = router;
