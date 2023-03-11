import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aeroplane from "../assets/images/svg/aeroplane.svg";
import discord from "../assets/images/svg/discord.svg";
const Footer = () => {
  return (
    <>
      <section className="footer_bg py-5" id="team">
        <Container>
          <Row className="justify-content-between justify-content-center align-items-center">
            <Col lg={7}>
              <ul className="ps-0 gap-sm-5  gap-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                <li>
                  <a
                    href="#"
                    className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none link_hover"
                  >
                    Tokemonics
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none link_hover"
                  >
                    Rarity
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none link_hover"
                  >
                    Team
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="#"
                    className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none link_hover"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <ul className="d-flex align-items-center gap-5 justify-content-lg-end justify-content-center mt-4 mt-lg-0">
                <li>
                  <a
                    href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                    target="_blank"
                  >
                    <img src={aeroplane} alt="twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?q=discord&oq=d&aqs=chrome.3.69i60j69i57j35i39l2j69i60j69i61j69i60l2.3550j0j7&sourceid=chrome&ie=UTF-8"
                    target="_blank"
                  >
                    <img src={discord} alt="discord" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
