const express = require('express');
const router = express.Router();
const News = require('./data/News');

router.get('/news/:start/:end', (req, res, next) => {
  News.getRange(req.params.start, req.params.end, (data) => {
    res.send(data)
  })
})

router.get('/news/:id', (req, res, next) => {
  News.getByID(req.params.id, (data) => {
    res.send(data);
  })
})

router.post('/news/:id', (req, res, next) => {
  if (req.isAuthenticated()) {
    History.addHistory({
      type: `News [New]`,
      date: new Date(),
      user: req.user
    })
    News.create(req.params.id, req.body, data => {
      res.send(data);
    })
  } else {
    res.status(403).send({
      message:'Forbidden'
    })
  }
})

router.put('/news/:id', (req, res, next) => {
  if (req.isAuthenticated()) {
    History.addHistory({
      type: `News [Edit]`,
      date: new Date(),
      user: req.user
    })
    News.put(req.params.id, req.body, (data) => {
      res.send(data);
    })
  } else {
    res.status(403).send({
      message:'Forbidden'
    })
  }
})

router.delete('/news/:id', (req, res, next) => {
  if (req.isAuthenticated()) {
    History.addHistory({
      type: `News [Delete]`,
      date: new Date(),
      user: req.user
    })
    News.delete(req.params.id, (data) => {
      res.send(data);
    })
  } else {
    res.status(403).send({
      message:'Forbidden'
    })
  }
})

module.exports = router;
