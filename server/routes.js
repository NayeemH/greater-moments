const express = require('express');
const router = express.Router();
const heroService = require('./hero.service');


// router.get('/heroes', (req, res) => {
//  res.send(200, [
//     {"id": 10, "name": "Starlord", "saying": "oh yeah"}
//  ])
// });

module.exports=router;

router.get('/build', (req, res) => {
  console.log('build hit in routes');
  heroService.getHeroes(req, res);
//  res.send(200, [
//      {"id": 10, "name": "Starlord", "saying": "oh yeah"}
//  ])
});

router.post('/assess', (req, res) => {
  console.log('asses hit in routes');
  heroService.postHero(req, res);
});
