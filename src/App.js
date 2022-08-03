import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import ProjectsPage from './Pages/Projects';
import Project1 from "./Pages/projects/project1";
import Project2 from "./Pages/projects/project2";
import Project3 from "./Pages/projects/project3";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/Projects"> Projects </Link>
      </nav>
      <Routes>
        <Route path='/' element={ <HomePage /> }/>
        <Route path='/about' element={ <AboutPage /> }/>
        <Route path='/Projects' element={<ProjectsPage />}> 
          <Route path="project1" element={ <Project1 /> } />
          <Route path="project2" element={ <Project2 /> } />
          <Route path="project3" element={ <Project3 /> } />
        </Route>
        <Route path='*' element={ <ErrorPage /> }/>
      </Routes>
    </Router>
  )
}

export default App;
