const express = require('express');
const router = express.Router();
const multer = require('multer');
const validate = require('../middleware/validate');
const Patient = require('../models/patient');
const path = require('path');
const bcrypt = require('bcrypt');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  }
});

// Check file type
const checkFileType = (file, cb) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
};

// New patient registration route
router.post('/patients',upload.single('patientPhoto'), validate.register, (req, res) => {
  // Save new patient to database

  const hash = bcrypt.hashSync(req.body.password, 10);
  const password = hash.substr(0, 15);

  const patient = new Patient(
       req.body.name,
       req.body.address,
       req.body.email,
       req.body.phone,
       password,
       req.file.path
  );

  patient.save()
    .then((result) => {
      res.status(201).json({
        message: 'Patient registered successfully',
        patient: result.insertId
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        error: error
      });
    });
});

module.exports = router;
