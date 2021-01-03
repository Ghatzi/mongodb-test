import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Row } from 'reactstrap';

const Posts = () => {
  const [posts, setPosts] = useState({
    post: []
  });

  const { post } = posts;

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await axios
      .get('/api')
      .then(response => {
        const data = response.data;
        setPosts({ post: data });
        // console.log('Data received!');
      })
      .catch(err => {
        console.error(err);
      });
  };

  const displayPosts = post => {
    return post.map(p => (
      <div className="posts" key={p._id}>
        <Container>
          <Row>
            <h3>{p.username}</h3>
            <p className="posts__followers">{p.followers}</p>
          </Row>
          <Row>
            <h5>{p.hashtags}</h5>
          </Row>
          <Row>
            <p className="posts__desc">{p.desc}</p>
          </Row>
        </Container>
      </div>
    ));
  };

  const checkPosts = () => {
    return !post.length ? (
      <p>No Posts, why not create one?</p>
    ) : (
      displayPosts(post)
    );
  };

  return (
    <>
      <h1>Influencer Details</h1>
      <Link to="/" className="btn btn-primary" title="Create A Post">
        Create A Post
      </Link>
      <p>no.of posts: {post.length}</p>
      {checkPosts()}
      <Link to="/" className="btn btn-primary" title="Create A Post">
        Create A Post
      </Link>
    </>
  );
};

export default Posts;
