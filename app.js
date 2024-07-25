const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize('your-database', 'your-username', 'your-password', {
  host: 'your-host',
  dialect: 'postgres'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
