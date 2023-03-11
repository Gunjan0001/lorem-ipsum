import React from "react";
import { Container } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <section className="faq_bg py-5 overflow-hidden " id="faq">
        <Container>
          <h2 className="commom_heading text-center">FAQ</h2>
          <div className="faq_shadow mw_900 px-5 py-4 mx-auto text-center mt-3">
            <p className="mb-0 ff_source_sans_pro fw_bold fs_35 faq_para">
              What is the total The Name supply?
            </p>
            <p className="mb-0   ff_source_sans_pro fw_semibold fs_35  clr_6">
              The Total supply is *****.
            </p>
          </div>
          <div className="faq_shadow mw_900 px-5 py-4 mx-auto text-center mt-3">
            <p className="mb-0 ff_source_sans_pro fw_bold fs_35 faq_para">
              Where can I buy or sell my The Name?
            </p>
            <p className="mb-0   ff_source_sans_pro fw_semibold fs_35  clr_6">
              You can mint them on our website or get them on secondary market.
            </p>
          </div>
          <div className="faq_shadow mw_900 px-5 py-4 mx-auto text-center mt-3">
            <p className="mb-0 ff_source_sans_pro fw_bold fs_35 faq_para">
              Where can I buy TNAT$ token?
            </p>
            <p className="mb-0   ff_source_sans_pro fw_semibold fs_35  clr_6">
              You can buy across multiple platforms.
            </p>
          </div>
          <div className="faq_shadow mw_900 px-5 py-4 mx-auto text-center mt-3">
            <p className="mb-0 ff_source_sans_pro fw_bold fs_35 faq_para">
              Have More Questions?
            </p>
            <p className="mb-0   ff_source_sans_pro fw_semibold fs_35  clr_6">
              Join our Discord.
            </p>
          </div>
        </Container>
        <div className="border_bottom mt-4"></div>
      </section>
    </>
  );
};

export default Faq;
