const connection = require('./db');



// Query to fetch all the psychiatrists, their count along with IDs and patient details for a hospital
const getPsychiatrists = (hospitalId, callback) => {
  const query = `
    SELECT h.name AS hospital_name, COUNT(p.id) AS psychiatrist_count, COUNT(DISTINCT pa.id) AS patient_count, p.id AS psychiatrist_id, p.name AS psychiatrist_name, COUNT(DISTINCT pa.id) AS patient_count
    FROM hospitals h
    LEFT JOIN psychiatrists p ON p.hospital_id = h.id
    LEFT JOIN patients pa ON pa.psychiatrist_id = p.id
    WHERE h.id = ?
    GROUP BY p.id
    `;

  connection.query(query, [hospitalId], (error, results) => {
    callback(error, results);
  });
};

module.exports = { getPsychiatrists };
