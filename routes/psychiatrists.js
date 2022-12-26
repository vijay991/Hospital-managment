const express = require('express');
const router = express.Router();
const Psychiatrist = require('../models/psychiatrist');
const Hospital = require('../models/hospital');
const errorHandler = require('../middleware/error-handoler');

// Fetch all the psychiatrists, their count along with IDs and patient details for a hospital
router.post('/psychiatrists', (req, res) => {
  const hospitalId = req.body.hospitalId;

  Hospital.getHospitalById(hospitalId, (error, result,next) => {
    if (error) {
      return errorHandler(error, req, res, next);
    }
    if (!result) {
      const err = new Error(`Hospital not found with given id-${hospitalId}`);
      err.status = 404;
      return errorHandler(err, req, res, next);
    }
  
    Psychiatrist.getPsychiatrists(hospitalId, (error, results,next) => {
      if (error) {
        return errorHandler(error, req, res, next);
      } else {
        const hospitalName = results[0].hospital_name;
        const psychiatristDetails = results.map(result => ({
          id: result.psychiatrist_id,
          name: result.psychiatrist_name,
          patientCount: result.patient_count
        }));
        let TotalpatientCount = 0;
        for (let i = 0; i < results.length; i++) {
          TotalpatientCount = TotalpatientCount + results[i].patient_count;
        }
        const psychiatristCount = results.length;
        res.send({
          hospitalName,
          psychiatristCount,
          TotalpatientCount,
          psychiatristDetails
        });
      }
    });
  });
});

module.exports = router;
