import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/" component={PostForm} exact />
        <Route path="/posts" component={Posts} exact />
      </Container>
    </Router>
  );
};

export default App;
