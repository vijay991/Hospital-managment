const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRoutes = require('./routes/index');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server started on port ${port}`);
});
