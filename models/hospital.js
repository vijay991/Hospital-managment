const connection = require('./db');

const getHospitalById = (hospitalId, callback) => {
  const query = 'SELECT * FROM hospitals WHERE id = ?';
  connection.query(query, [hospitalId], (error, result) => {
    if (error) {
      return callback(error);
    }
    callback(null, result[0]);
  });
};

module.exports = {
  getHospitalById
};
