import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Nav = () => {
  const [openNav, setopenNav] = useState(true);
  if (openNav) {
    document.body.classList.remove("overflow-hidden");
  } else {
    document.body.classList.add("overflow-hidden");
  }
  return (
    <>
      <section className="nav_bg py-4">
        <Container>
          <div className=" d-flex justify-content-between  align-items-center ">
            <ul className="ps-0 mb-0">
              <li>
                <a
                  href="#"
                  className="ff_source_sans3 fw_bold fs_30 clr_1  text-decoration-none logo"
                >
                  THE LOGO
                </a>
              </li>
            </ul>
            <ul className="ps-0 mb-0 d-none d-lg-flex align-items-center gap-5">
              <li>
                <a
                  href="#token"
                  className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none nav_links"
                >
                  Tokemonics
                </a>
              </li>
              <li>
                <a
                  href="#rarity"
                  className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none nav_links"
                >
                  Rarity
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none nav_links"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none nav_links"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none roadmap_btn "
                >
                  Roadmap
                </a>
              </li>
            </ul>
            <button
              onClick={() => setopenNav(false)}
              className="d-flex flex-column d-lg-none menu_btn justify-content-evenly"
            >
              <span className="menu_line"></span>
              <span className="menu_line"></span>
              <span className="menu_line"></span>
            </button>
          </div>
        </Container>
        <div
          className={
            openNav ? "showNav d-lg-none d-block" : "hideNav d-lg-none d-block"
          }
        >
          <ul className="mb-0 ps-0 position-relative d-flex flex-column gap-5 justify-content-center w-100 min-vh-100 align-items-center">
            <button
              onClick={() => setopenNav(true)}
              className="btn btn-close fs-4  position-absolute top-0 end-0 mt-4 me-4"
            ></button>
            <li>
              <a
                href="#"
                className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none"
              >
                Tokemonics
              </a>
            </li>

            <li>
              <a
                href="#"
                className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none"
              >
                Rarity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="ff_ubuntu fw_regular fs_31 clr_8 text-decoration-none"
              >
                Roadmap
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Nav;
