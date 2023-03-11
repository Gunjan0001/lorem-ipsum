import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "./Nav";
import twitter from "../assets/images/svg/twitter.svg";
import discord from "../assets/images/png/discord.png";
import image from "../assets/images/png/image.png";
const Header = () => {
  return (
    <>
      <section className="min-_vh_xl_100 d-flex flex-column overflow-hidden">
        <Nav />
        <div className="header_bg  flex-grow-1 d-flex align-items-center ">
          <Container>
            <Row className="py-5 justify-content-center justify-content-xl-start">
              <Col xl={7}>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                >
                  <div className="text-center text-xl-start">
                    <h2 className="ff_source_sans_pro fw_large fs_81 lorem_clr">
                      LOREM IPSUM
                    </h2>
                    <p className="ff_source_sans_pro fw-semibold fs_30 para_color mb-0  mw_600">
                      Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut temper labore et
                      dolore magna aliqua.
                    </p>
                    <p className="ff_source_sans_pro fw_small fs_33 clr_2 mt-3">
                      Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="d-sm-flex align-items-center gap-sm-5 mt-5 justify-content-center  justify-content-xl-start">
                      <span className="d-flex align-items-center twitter_btn border-0 gap-2  justify-content-center">
                        <img className="wh_49" src={twitter} alt="twitter" />
                        <p className="mb-0  ff_fira_code fw_medium fs_32 clr_9">
                          Twitter
                        </p>
                      </span>
                      <span className="d-flex align-items-center discord_btn border-0 gap-3 mt-4 mt-sm-0 justify-content-center">
                        <img className="wh_49" src={discord} alt="discord" />
                        <p className="mb-0 ff_fira_code fw_medium fs_32 clr_9">
                          Discord
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8} xl={5}>
                <div
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-offset="200"
                  data-aos-duration="2000"
                >
                  <img className="w-100 mt-5 mt-xl-0" src={image} alt="image" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Header;
