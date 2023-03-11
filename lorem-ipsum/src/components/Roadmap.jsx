import React from "react";
import { Container, Row } from "react-bootstrap";
import circleline from "../assets/images/png/circleline.png";
import rightline from "../assets/images/png/rightline.png";
const Roadmap = () => {
  return (
    <>
      <section className="roadmap_bg py-3 overflow-hidden" id="roadmap">
        <Container>
          <h2 className="commom_heading text-center">Roadmap</h2>
          <Row className="pt-5">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="2000"
            >
              <div className="col-xl-6 position-relative p-md-5">
                <div className="d-flex  align-items-center gap-sm-3 gap-1 ms-5  ms-xl-0 ">
                  <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                    01
                  </p>
                  <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0 ">
                    Lorem Ipsum
                  </p>
                </div>{" "}
                <img
                  className="position-absolute w-100 position_circle"
                  src={circleline}
                  alt="circleline"
                />
                <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 ms-5 ms-lg-5 ms-xl-0">
                  Lorem Ipsum dolor sit amet
                </p>
                <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  ms-5 ms-lg-5 ms-xl-0">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>{" "}
              </div>
            </div>
          </Row>
          <Row className="justify-content-end mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-3 me-5 me-lg-5 pe-sm-5 pe-5 me-xl-0 justify-content-end">
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0  ">
                  Lorem Ipsum
                </p>
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  02
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_line"
                src={rightline}
                alt="rightline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>{" "}
          <Row className="mt-3 mt-sm-0">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-offset="200"
              data-aos-duration="2000"
            >
              <div className="col-xl-6 position-relative p-md-5">
                <div className="d-flex  align-items-center gap-sm-3 gap-1 ms-5  ms-xl-0 ">
                  <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                    03
                  </p>
                  <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0 ">
                    Lorem Ipsum
                  </p>
                </div>{" "}
                <img
                  className="position-absolute w-100 position_circle"
                  src={circleline}
                  alt="circleline"
                />
                <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 ms-5 ms-lg-5 ms-xl-0">
                  Lorem Ipsum dolor sit amet
                </p>
                <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  ms-5 ms-lg-5 ms-xl-0">
                  Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>{" "}
              </div>
            </div>
          </Row>{" "}
          <Row className="justify-content-end mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-3 me-5 me-lg-5 pe-sm-5 pe-5 me-xl-0 justify-content-end">
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0  ">
                  Lorem Ipsum
                </p>
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  04
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_line"
                src={rightline}
                alt="rightline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>{" "}
          <Row className="mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-sm-3 gap-1 ms-5  ms-xl-0 ">
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  05
                </p>
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0 ">
                  Lorem Ipsum
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_circle"
                src={circleline}
                alt="circleline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>
          <Row className="justify-content-end mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-3 me-5 me-lg-5 pe-sm-5 pe-5 me-xl-0 justify-content-end">
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0  ">
                  Lorem Ipsum
                </p>
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  06
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_line"
                src={rightline}
                alt="rightline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>{" "}
          <Row className="mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-sm-3 gap-1 ms-5  ms-xl-0 ">
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  07
                </p>
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0 ">
                  Lorem Ipsum
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_circle"
                src={circleline}
                alt="circleline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>{" "}
          <Row className="justify-content-end mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-3 me-5 me-lg-5 pe-sm-5 pe-5 me-xl-0 justify-content-end">
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0  ">
                  Lorem Ipsum
                </p>
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  08
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_line"
                src={rightline}
                alt="rightline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>
          <Row className="mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-sm-3 gap-1 ms-5  ms-xl-0 ">
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  09
                </p>
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0 ">
                  Lorem Ipsum
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_circle"
                src={circleline}
                alt="circleline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  ms-5 ms-lg-5 ms-xl-0">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>{" "}
          <Row className="justify-content-end mt-3 mt-sm-0">
            <div className="col-xl-6 position-relative p-md-5">
              <div className="d-flex  align-items-center gap-3 me-5 me-lg-5 pe-sm-5 pe-5 me-xl-0 justify-content-end">
                <p className="ff_ubuntu fw_bold fs_46 lorem_para mb-0  ">
                  Lorem Ipsum
                </p>
                <p className="ff_space_mono fw_bold fs_46 roadmap_para mb-0">
                  10
                </p>
              </div>{" "}
              <img
                className="position-absolute w-100 position_line"
                src={rightline}
                alt="rightline"
              />
              <p className="mb-0 ff_source_sans_pro fw_large fs_40 clr_7  mt-4 pt-md-3 me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor
              </p>
              <p className="ff_source_sans_pro fw_semibold fs_24 clr_8  me-3 me-lg-5 me-xl-0 text-end pe-sm-5">
                Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua.
              </p>{" "}
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Roadmap;
