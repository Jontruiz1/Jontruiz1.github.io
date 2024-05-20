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
    case "/Projects":
      component = <Projects />
      break
  }

  return (
    <>
      <NavBar/>
      {component}
      <Footer/>
    </>
  )

}

export default App;
