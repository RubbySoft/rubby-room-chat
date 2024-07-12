import React from "react";
import Typewriter from "typewriter-effect";

function RubbyAboutType() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Dev",
           "RubbySoft",
          "Android Dev",
          "React",
          "PHP",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default RubbyAboutType;
