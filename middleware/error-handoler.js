module.exports = (err, req, res, next) => {
  console.error(err);
  if (err.status) {
      res.status(err.status).send({message: err.message });
  } else {
    res.status(500).send('Internal Server Error');
  }
};
