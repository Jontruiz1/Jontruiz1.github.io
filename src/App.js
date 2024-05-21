import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/Home":
      component = <Home/>
      break;
    case "/Skills":
      component = <Skills/>
      break;
    case "/Projects":
      component = <Projects />
      break
  }

  return (
    <div className="content-container">
      <NavBar/>
      {component}
      <Footer/>
    </div>
  )

}

export default App;
