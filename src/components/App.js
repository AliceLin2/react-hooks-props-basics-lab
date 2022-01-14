import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  const{color, name, city, bio, links} = user
  return (
    <div>
      <NavBar />
      <Home color={color} username={name} city={city}/>
      <About bio={bio} github={links.github} linkedin={links.linkedin}/>
    </div>
  );
}

export default App;
