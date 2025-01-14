const express = require('express');
const userAuthController = require('../controllers/auth.user.controller');
const adminAuthController = require('../controllers/auth.admin.controller');
const userAuthMiddleware=require('../middlewares/authUser.middleware')
const adminAuthMiddleware=require('../middlewares/authAdmin.middleware')

const router = express.Router();

// Routes for user authentication
router.post('/user/register',userAuthController.sendOTPForNewUser);
router.post('/user/verifyOTP',userAuthController.createUser);
router.post('/user/login', userAuthController.loginUser);
router.post('/user/logout', userAuthMiddleware, userAuthController.logoutUser);

// Routes for admin authentication

// Super Admin has to be logged in to register new admins.
router.post('/admin/register', adminAuthMiddleware.authenticateAdmin, adminAuthMiddleware.checkSuperAdmin, adminAuthController.createAdmin);

// Standard Admin routes
router.post('/admin/login', adminAuthController.loginAdmin);
router.post('/admin/logout', adminAuthMiddleware.authenticateAdmin, adminAuthController.logoutAdmin);

module.exports = router;
