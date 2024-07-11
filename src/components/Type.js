import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Rubby Room Chat",
           "RubbySoft",
          "Real Time Chat Room",
          "Chat Any Time",
          "Create Unlimited Chat Room",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
