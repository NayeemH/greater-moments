const mongoose = require('mongoose');
/**
* Set to Node.js native promises
* Per https://mongoosejs.com/docs/promises.html
*/
mongoose.Promise = global.Promise;

// const env = require('./environment/environment.js');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://greater-moment-db:1Av9US1NRAWJ1f4Q9zgZn1JeaOKSKn1njnKPLfmM5Zywtn00RPIzdmyGtd8F0JReJxpKDFDTiQS69lelv8WeZw%3D%3D@greater-moment-db.mongo.cosmos.azure.com:10255/?ssl=true`;

function connect() {
mongoose.set('debug', true);
return mongoose.connect(mongoUri, {});
}

module.exports = {
connect,
mongoose
};
