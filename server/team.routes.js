const express = require('express');
const app = express();
const teamRoute = express.Router();
const Team = require('./team.model');

require('./mongo').connect();

// Create a Team
teamRoute.route('/add-team').post((req, res, next) => {
    Team.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all Teams
teamRoute.route('/teams').get((req, res) => {
    Team.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get a Team
teamRoute.route('/teams/:id').get((req, res) => {
    Team.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update a Team
teamRoute.route('/update-team/:id').put((req, res, next) => {
    Team.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Team updated successfully!')
    }
  })
})
// Delete a Team
teamRoute.route('/delete-team/:id').delete((req, res, next) => {
    Team.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = teamRoute;
