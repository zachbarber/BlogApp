import BlogPosts from './components/BlogPosts';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (

    <div className='appContainer'>
      <div className='contentContainer'>
        <Router>
          <BlogPosts />
        </Router>
      </div>
    </div>

  );
}

export default App;
