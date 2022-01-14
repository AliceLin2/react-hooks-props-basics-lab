import React from "react";
import Links from "./Links"

function About(props) {
  const {bio, github, linkedin} = props
  const isPassDown = (bio === undefined || bio.length === 0)
  return (
    <div id="about">
      <h2>About Me</h2>
      {isPassDown ? null:<p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;
