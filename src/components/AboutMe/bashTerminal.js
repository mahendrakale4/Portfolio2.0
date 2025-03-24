import React from "react";
import { Terminal } from "../Skills/skillsStyles";
import red from "../../assets/images/skills/buttons/red.svg";
import orange from "../../assets/images/skills/buttons/orange.svg";
import green from "../../assets/images/skills/buttons/green.svg";
import Typewriter from "typewriter-effect";

const BashTerminal = () => {
  return (
    <Terminal className="whiteTerminal">
      <div className="terminal-window">
        <img src={red} alt="red" title="close" />
        <img src={orange} alt="orange" title="expand" />
        <img src={green} alt="green" title="minimize" />
      </div>
      <p className="terminal__user">
        Mahendrakale@portfolio
        <span>~</span>
      </p>
      <p className="terminal__commands">
        {" "}
        <Typewriter
          options={{
            strings: [
              "<strong>$</strong> <span>mkdir</span> <em>cool_project</em><br><strong>$</strong> <span>cd</span> <em>cool_project/</em> <br><strong>$</strong> npm init -y",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </p>
    </Terminal>
  );
};

export default BashTerminal;