import logo from './logo.svg';
import './App.css';
import Skill from './Skill/Skill'
import Particles from 'react-particles-js';
import { Component } from 'react';
import Experience from './Experience/Experience'
import Header  from './Header/Header'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro';
import Footer from './Footer/Footer'

class  App extends Component {
  render(){
  return (
    <div className="App" >
     <Header />
     <Intro />
      
 <Skill />
 <Experience />
 <Project />
 <Footer />

    </div>
  );
}
}

export default App;
