import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 1000;
  width: 100%;
  font-family: "Fira Code", monospace;
  margin-top: 10rem;
  @media only screen and (max-width: 600px) {
    //code goes here
    margin-top: 5rem;
  }
`;

export const ContactMarquee = styled.div`
  font-size: 8rem;
  width: 100%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--base-gray);
  border-bottom: 1px solid var(--base-gray);
  //align image and text inside p tag
  p {
    display: flex;
    margin: 2rem 0;
    img {
      width: 80px;
      margin: auto 2rem;
    }
  }
  //Media Queries
  @media only screen and (max-width: 768px) {
    //code goes here
    font-size: 4rem;
    p {
      img {
        width: 30px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    font-size: var(--fs4);
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 100%;
  color: white;
  .contact__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--base-gray);
  }
`;

export const MegaEmail = styled.div`
  color: rgba(255, 254, 244, 0.3);
  font-size: var(--fs4);
  text-align: center;
  border-bottom: 1px solid var(--base-gray);
  padding: 2rem 0;
  @media only screen and (max-width: 600px) {
    //code goes here
    font-size: var(--fs2);
  }
`;

export const EditorsNote = styled.div`
  margin: auto;
  justify-content: center;
  display: flex;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #64748b;
  text-align: center;
  width: 100%;
  a {
    color: #94a3b8;
    text-decoration: underline;
  }
  @media only screen and (max-width: 600px) {
    //code goes here
    padding: 1rem;
  }
`;