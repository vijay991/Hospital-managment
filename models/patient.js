const connection = require('./db');

class Patient {
  constructor(name, address, email, phone, password, patientPhoto) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.patientPhoto = patientPhoto;
  }

  save() {
    const sql = 'INSERT INTO patients SET ?';
    return new Promise((resolve, reject) => {
      connection.query(sql, this, (error, results, fields) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Patient;
