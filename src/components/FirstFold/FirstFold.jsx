/* eslint-disable max-len */
import React from "react";
import { FirstFoldContainer, FlightPath, Init } from "./FirstFoldStyles";
import nerd from "../../assets/images/home/nerd.png";
import Flight from "../../assets/images/home/flight.svg";
import Circle from "../../assets/images/home/circleSVG.svg";
import Scratch from "../../assets/images/home/scratch.png";
import OrangeContainer from "./OrangeContainer";
// import {motion, useInView, animate } from "framer-motion";
import { motion } from "framer-motion";
function FirstFold() {
  return (
    <Init>
      <FirstFoldContainer className="wrapper" id="blackCursor">
        <div className="firstFold__left">
          {/* <FlightPath>
            <p className="flight-path__origin">BOM</p>
            <div className="flight-path__line">
              <img src={Flight} alt="Flight" />
            </div>
            <p className="flight-path__origin">Pune</p>
          </FlightPath> */}
          <div className="body-copy">
            <p>
              <span className="rel">
                <img src={Circle} alt="circle" />
                Full-stack developer{" "}
              </span>{" "}
            </p>
            <p>
              {/* I like
              <span className="relative">
                <img src={Scratch} alt="asd" style={{ width: "fit-content" }} />
                breaking
              </span> */}
              SDE at JIO Platforms Limited, building scalable solutions with Java, Spring Boot, JavaScript, Node.js, and React.js.
            </p>
            <p>
              I&apos;ve developed systems that reduced in-flight cancellations by 80% and streamlined end-to-end processes with RESTful APIs and event-driven architecture
            </p>
            <p>
              I focus on creating scalable, reliable, high-performance applications, with a passion for system design and problem-solving (300+ DSA challenges cracked!).
            </p>
          </div>
        </div>
        <div className="firstFold__right">
          <div className="window-pane" />
          {/* how can I slow this down? */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={nerd} alt="nerd" />
          </motion.div>
        </div>
      </FirstFoldContainer>
      <OrangeContainer />
    </Init>
  );
}

export default FirstFold;
