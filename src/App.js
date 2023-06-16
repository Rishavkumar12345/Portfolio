import Topbar from "./component/topbar/Topbar";
import Intro from './component/intro/Intro';
import Portfolio from './component/portfolio/Portfolio';
import Works from './component/works/Works';
import Contact from './component/contact/Contact'
import Testimonial from "./component/testimonial/Testimonial";
import Menu from './component/menu/Menu';
import './App.scss';
import { useState } from "react";

function App() {
  const [menuopen,setmenuopen]=useState(false);
  return (
    <div className="App">
      <Topbar menuopen={menuopen} setmenuopen={setmenuopen}/>
      <Menu menuopen={menuopen} setmenuopen={setmenuopen}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
