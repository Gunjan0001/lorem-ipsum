import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import token from "../assets/images/png/token.png";
const Tokemonics = () => {
  return (
    <>
      <section className="py-5 rarity_bg overflow-hidden" id="token">
        <Container>
          <h2 className="commom_heading text-center">Tokemonics</h2>{" "}
          <div
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-offset="200"
            data-aos-duration="2000"
          >
            <Row className="  d-flex align-items-center justify-content-center p-3">
              <div className="token col-lg-11">
                <Row className="align-items-center py-3">
                  <Col sm={3}>
                    <div className="d-flex justify-content-center ">
                      <img src={token} alt="token"></img>
                    </div>
                  </Col>
                  <Col sm={7}>
                    <div className="mt-3 mt-sm-0  ">
                      <p className="mb-0 ff_open_sans fw_regular fs_28 clr_10 ms-sm-5 ps-5 text-center text-sm-start">
                        THE NAME TOKEN (TNAT)
                      </p>
                      <div className="d-flex align-items-center gap-5 ms-sm-5 ps-5 justify-content-center justify-content-sm-start">
                        <p className="mb-0 ff_open_sans fw_regular fs_30 clr_3">
                          0.332627
                        </p>
                        <p className="mb-0 ff_open_sans fw_regular fs_20 clr_13">
                          (+17.4%)
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className="justify-content-center  ">
                  <Col sm={6} md={3} className="border pb-2">
                    <div className="text-center ">
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        RANK
                      </p>
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        3
                      </p>
                    </div>
                  </Col>
                  <Col sm={6} md={6} className="border pb-2">
                    {" "}
                    <div className="text-center">
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        MARKET CAP
                      </p>
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        $? USD
                      </p>
                    </div>
                  </Col>
                  <Col sm={6} md={3} className="border pb-2">
                    {" "}
                    <div className="text-center">
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        VOLUME
                      </p>
                      <p className="mb-0 ff_open_sans fw_regular fs_22 clr_4">
                        $12.65 KUSD
                      </p>
                    </div>
                  </Col>
                  <p className="text-center mb-0 ff_open_sans fw_regular fs_22 clr_11 ">
                    <i>Powered by CoinMarketCap </i>
                  </p>
                </Row>
              </div>
            </Row>
          </div>
          <Row className="justify-content-center justify-content-lg-start pt-4">
            <Col
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="2000"
              sm={6}
              lg={4}
              className="p-xl-5"
            >
              <div className="tokens   px-5 pt-3 pb-5 mb-4 mb-lg-0 h-100">
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="mb-0 ff_source_sans_pro fw_large fs_39 text-white">
                    NFT Holders
                  </p>
                  <p className="mb-0 ff_source_sans_pro fw_large fs_47 text-white">
                    70%
                  </p>
                </div>
                <p className="ff_source_sans_pro fw_semibold fs_23 clr_5 mb-0">
                  NFT Holders will earn $TNAT via p2e mechanism.
                </p>
              </div>
            </Col>
            <Col
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="2000"
              sm={6}
              lg={4}
              className="p-xl-5"
            >
              <div className="tokens   px-5 pt-3 pb-5 mb-4 mb-lg-0 h-100">
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="mb-0 ff_source_sans_pro fw_large fs_39 text-white">
                    Liquidity
                  </p>
                  <p className="mb-0 ff_source_sans_pro fw_large fs_47 text-white">
                    20%
                  </p>
                </div>
                <p className="ff_source_sans_pro fw_semibold fs_23 clr_5 mb-0">
                  20% of $TNAT token supply will be used for liquidity in
                  exchanges.
                </p>
              </div>
            </Col>
            <Col
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="2000"
              sm={6}
              lg={4}
              className="p-xl-5"
            >
              <div className="tokens   px-5 pt-3 pb-5 mb-4 mb-lg-0 h-100">
                <div className="d-flex justify-content-between align-items-center ">
                  <p className="mb-0 ff_source_sans_pro fw_large fs_39 text-white">
                    Team
                  </p>
                  <p className="mb-0 ff_source_sans_pro fw_large fs_47 text-white">
                    10%
                  </p>
                </div>
                <p className="ff_source_sans_pro fw_semibold fs_23 clr_5 mb-0">
                  10% of $TNAT token supply is for TNAT team.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Tokemonics;
