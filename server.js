const express = require('express');
const morgan = require('morgan');
const { connectDB } = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const routes = require('./routes/api');

connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const data = {
//   title: 'some title 3',
//   hashtags: 'the_devlab',
//   body: 'this is some body text 3',
//   followers: 79
// };

// const newPosts = new Posts(data);

// newPosts.save(error => {
//   if (error) {
//     console.log('error');
//   } else {
//     console.log('data saved');
//   }
// });

app.use(morgan('tiny'));
app.use('/api', routes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`A node js API is listening on port: ${port}`);
});
