const { check, validationResult } = require('express-validator');

exports.register = [
  check('name').notEmpty().withMessage('Name is required'),
  check('address').isLength({ min: 10 }).withMessage('Address must be at least 10 characters'),
  check('email').isEmail().withMessage('Email must be a valid email address'),
  check('phone').matches(/^\+[0-9]{10,15}/).withMessage('Phone number must be at least 10 digits and with country code'),
  check('password').isLength({ min: 8, max: 15 }).withMessage('Password must be between 8 and 15 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+/).withMessage('Password must contain at least one upper case character, one lower case character, and one number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }
];
