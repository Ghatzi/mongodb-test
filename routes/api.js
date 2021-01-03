const express = require('express');
const router = express.Router();

const Posts = require('../db/models/posts');

router.get('/', (req, res) => {
  Posts.find({})
    .then(data => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch(error => {
      console.error(error.message);
    });
});

router.post('/save', (req, res) => {
  // console.log('Body: ', req.body);
  const data = req.body;
  const newPosts = new Posts(data);

  newPosts.save(error => {
    if (error) {
      res.status(500).json({ msg: 'Server error!' });
      return;
    }

    return res.json({ msg: 'Data saved!' });
  });
});

// router.get('/name', (req, res) => {
//   const data = {
//     username: 'the_devlab',
//     age: 1
//   };
//   res.json(data);
// });

// app.post('/', function (req, res) {
//   res.send('POST request to the homepage');
// });

module.exports = router;
