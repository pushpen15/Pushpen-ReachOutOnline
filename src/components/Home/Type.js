import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Engineer",
          "Freelancer",
          "ReactJs Developer",
          "Python Developer",
          "Java Developer",
          "Open Source Contributor",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
