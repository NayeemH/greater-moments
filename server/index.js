const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const routes = require('./routes');
const cors = require('cors');

const root = './';
const port = process.env.PORT || '3000';


const teamRoute = require('./team.routes')
const userRoute = require('./user.routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(root, 'dist/greater-moment/')));
app.use('/api', teamRoute);
app.use('/api', userRoute);
app.get('*', (req, res) => {
  res.sendFile('dist/greater-moment/', {root});
});

app.listen(port, () => console.log(`API running on localhost:${port}`));
