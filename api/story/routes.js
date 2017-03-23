import express from 'express';

import Story from './model';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Story.find((err, stories) => {
      if (err)
        res.send(err);
      res.send(stories);
    });
  })
  .post((req, res) => {

    const story = new Story(req.body);
    story.save(err => {
      if (err)
        res.send(err);
      res.send(story);
    });
  });

router.route('/:storyId')
  .get((req, res) => {
    Story.findById(req.params.storyId, (err, story) => {
      if (err)
        res.send(err);
      res.send(story);
    });
  });

export default router;