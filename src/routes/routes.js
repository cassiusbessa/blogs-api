const express = require('express');
const loginRouter = require('./login.routes');
const userRoutes = require('./user.routes');
const categoriesRoutes = require('./categories.routes');
const postsRoutes = require('./posts.routes');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRoutes);
router.use('/categories', categoriesRoutes);
router.use('/post', postsRoutes);

module.exports = router;