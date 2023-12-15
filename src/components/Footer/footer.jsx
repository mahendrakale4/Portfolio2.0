import React from "react";
import {
  ContactInfo,
  ContactMarquee,
  // EditorsNote,
  FooterContainer,
  MegaEmail,
} from "./footerStyles";
import Marquee from "react-fast-marquee";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Star from "../../assets/images/footer/star.svg";
import { AiOutlineGithub,  AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { useState } from "react";

const Footer = () => {
  const [copy, setCopy] = useState(false);
  const copyEmail = "Mahendrakalepr@gmail.com";
  const handleCopy = () => {
    setCopy(true);
    //reset after 3 seconds
    setTimeout(() => {
      setCopy(false);
    }, 9000);
  };
  return (
    <FooterContainer>
      <ContactMarquee>
        <Marquee>
          {Array.from({ length: 6 }).map((_, i) => (
            <p className="contact" key={i}>
              <span>GET IN TOUCH</span>
              <img src={Star} alt="star" key={i} />
            </p>
          ))}
        </Marquee>
      </ContactMarquee>
      <ContactInfo>
        <div className="contact__icons">
          <a
            href="https://github.com/mahendrakale4"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <AiOutlineGithub size={50} />
          </a>
          <a
            href="https://twitter.com/MahendraKale48"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <AiOutlineTwitter size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahendra-kale/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <BiLogoLinkedin size={50} />
          </a>
        </div>
        <>
          <MegaEmail title={copy ? "Copied!" : "Click to copy"}>
            <CopyToClipboard text={copyEmail} onCopy={handleCopy}>
              <div>{copyEmail}</div>
            </CopyToClipboard>
          </MegaEmail>
          <p style={{ textAlign: "center", fontSize: "var(--fs1)",
            borderBottom: "1px solid var(--base-gray)",
            padding: "0.5rem 0" }}>Click the email to copy it to the clipboard.</p>
        </>

        {/* <EditorsNote>
          <p>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma{" "}
            </a>
            &{" "}
            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visual Studio Code{" "}
            </a>{" "}
            were my trusty sidekicks in creating this website.
            <br />
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>{" "}
            &{" "}
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>{" "}
            were my weapons of choice.
            <br />
            <a
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>{" "}
            was my trusty deploy soldier. <br />
          </p>
        </EditorsNote> */}
        {/* <a href="https://md5.gromweb.com/"></a> */}
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
