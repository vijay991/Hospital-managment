const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRoutes = require('./routes/index');

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoutes);
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Methods',
    'HEAD, OPTIONS, GET, POST, PUT, PATCH, DELETE, CONNECT'
  )
  res.header('Access-Control-Allow-Headers', '*')
  res.header('Content-Type', 'application/json')
  next()
})
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
