import { Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  return (
    <Fragment>
      <ContactInfo />
      <ContactForm />
    </Fragment>
  );
};
export default Contact;

const ContactInfo = () => {

  const form = useRef(null)
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Contact <span data-number={10} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* contact card */}
        <div
          className="trm-service-icon-box trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="img/icons/icon-5.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="img/icons/icon-5w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Call</h6>
            <div className="trm-mb-15">
              <span className="trm-label">Work:</span>{" "}
              <span className="trm-text-sm">+1 (702)849 3627</span>
            </div>
            <div>
              <span className="trm-label">Personal:</span>{" "}
              <span className="trm-text-sm">+1 (702) 849 3627</span>
            </div>
          </div>
        </div>
        {/* contact card end */}
      </div>
      <div className="col-lg-6">
        {/* contact card */}
        <div
          className="trm-service-icon-box trm-scroll-animation trm-active-el"
          data-scroll
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="img/icons/icon-6.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="img/icons/icon-6w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Write</h6>
            <div className="trm-mb-15">
              <span className="trm-label">Email:</span>{" "}
              <span className="trm-text-sm">mohamadalhaddad25@gmail.com</span>
            </div>
            
          </div>
        </div>
        {/* contact card end */}
      </div>
    </div>
  );
};
const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Get in touch <span data-number={11} />
        </h5>
      </div>
      <div className="col-lg-12">
        <div className="trm-contact-card">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea rows={6} placeholder="Message" defaultValue={""} />
            <div className="trm-form-bottom">
              <button type="submit" className="trm-btn">
                Send <i className="fas fa-arrow-right" />
              </button>
              <div className="trm-text-sm">
                * I promise the confidentiality of your personal information
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
