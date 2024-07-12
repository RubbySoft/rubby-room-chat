import React from "react";
import Typewriter from "typewriter-effect";

function MeType() {
  return (
    <Typewriter
      options={{
        strings: [
            "Software Developer",
            "Full Stack Web Developer",
           "Freelancer",
           "Android Developer",
           "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default MeType;
