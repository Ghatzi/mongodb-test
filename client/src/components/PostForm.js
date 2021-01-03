import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

const PostForm = () => {
  const [values, setValues] = useState({
    username: '',
    hashtags: '',
    desc: '',
    followers: ''
  });

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const { username, hashtags, desc, followers } = values;

  const handleSubmit = e => {
    e.preventDefault();

    axios({
      url: '/api/save',
      method: 'POST',
      data: { ...values }
    })
      .then(() => {
        setSuccess(true);
        setFailure(false);
        resetUserInputs();
        console.log('success');
      })
      .catch(err => {
        setSuccess(false);
        setFailure(true);
        console.log(err);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const resetUserInputs = () => {
    setValues({
      username: '',
      hashtags: '',
      desc: '',
      followers: ''
    });
  };

  const alertMessage = () => {
    return failure ? (
      <div className="alert alert-danger">Please fill in all fields</div>
    ) : (
      ''
    );
  };

  return (
    <>
      <h1>Enter Influencer Details</h1>
      <Form className="form__container" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="enter username..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="hashtags">Hash Tags:</Label>
          <Input
            type="text"
            id="hashtags"
            name="hashtags"
            value={hashtags}
            onChange={handleChange}
            placeholder="enter hash tags separated by comma..."
          />
        </FormGroup>
        <FormGroup>
          <Label for="desc">Description:</Label>
          <Input
            type="textarea"
            id="desc"
            name="desc"
            value={desc}
            onChange={handleChange}
            placeholder="enter influencers description..."
            rows={6}
          />
        </FormGroup>
        <FormGroup>
          <Label for="followers">Followers:</Label>
          <Input
            type="number"
            id="followers"
            name="followers"
            value={followers}
            onChange={handleChange}
            min="0"
            placeholder="enter number of followers..."
          />
        </FormGroup>
        <Button color="primary">{success ? 'Posted' : 'Post Data'}</Button>
        <Link to="/posts" className="btn btn-dark" title="View All Posts">
          View All Posts
        </Link>
        {alertMessage()}
      </Form>
    </>
  );
};

export default PostForm;
