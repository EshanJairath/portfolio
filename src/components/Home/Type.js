import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Innovation Engineer @ IMIS Global",
          "Microsoft Certified Azure Data Scientist",
          "Machine Learning Engineer",
          "Data Engineer",
          "Software Engineer",
          "Web Developer",
          "MERN Stack Developer",
          "Specialist in Developing web applications with Machine Learning API's"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
