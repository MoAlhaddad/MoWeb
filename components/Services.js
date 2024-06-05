const Services = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-mt-40 trm-title-with-divider">
          My Services <span data-number={3} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-1.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-1w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">Web Architecture</h6>
            <div className="trm-mb-20">
            Crafting architectural blueprints and technical specifications for web applications, ensuring alignment with client goals, industry best practices, and scalability requirements.
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        <div
          className="trm-service-icon-box trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-service-content">
            <div className="trm-icon">
              <img
                src="/img/icons/icon-2.svg"
                alt="icon"
                className="trm-black-icon"
              />
              <img
                src="/img/icons/icon-2w.svg"
                alt="icon"
                className="trm-white-icon"
              />
            </div>
            <h6 className="trm-mb-20">UI/UX Design</h6>
            <div className="trm-mb-20">
            As a UI/UX designer, I specialize in crafting seamless and engaging digital experiences that captivate users and drive results. Leveraging a combination of user interface (UI) design principles and user experience (UX) research methodologies, I create intuitive and visually stunning interfaces tailored to meet the unique needs of each project. Dolor sit amet, consectetur adipisicing elit. Delectus esse
              
            </div>
            <a
              data-fancybox=""
              href="#trm-order"
              className="trm-label trm-label-color"
            >
              Order now <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
        {/* service end */}
      </div>
      <div className="col-lg-6">
        {/* service */}
        </div>
      
        </div>
       
    
  );
};
export default Services;
