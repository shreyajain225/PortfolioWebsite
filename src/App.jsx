import React from "react";
import Profile from "./Profile";
import Navigation from "./Navigation";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
function App() {
  return (
    <div>
      <Navigation />
      <Profile />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
