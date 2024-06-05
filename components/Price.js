const Price = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Price plans <span data-number={8} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* price table */}
        <div
          className="trm-price trm-popular trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Hourly Payment</h6>
          </div>
          {/* card header end */}
          {/* price */}
          <div className="trm-price-number">
            <sup>$</sup>29<sup>h</sup>
          </div>
          {/* price end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* price list */}
          <ul className="trm-price-list">
            <li className="trm-label">Custom Website Development</li>
            <li className="trm-label">Website Maintenance and Support</li>
            <li className="trm-label trm-label-light">E-commerce Solutions</li>
            <li className="trm-label trm-label-light">Search Engine Optimization (SEO) Services</li>
          </ul>
          {/* price list end */}
          <a data-fancybox="" href="#trm-order" className="trm-btn">
            Order now <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* price table */}
      </div>
      <div className="col-lg-6">
        {/* price table */}
        <div
          className="trm-price trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          {/* card header */}
          <div className="trm-price-header">
            <h6>Full Time</h6>
          </div>
          {/* card header end */}
          {/* price */}
          <div className="trm-price-number">
            <sup>$</sup>2999<sup>per project</sup>
          </div>
          {/* price end */}
          <div className="trm-divider trm-mb-40 trm-mt-40" />
          {/* price list */}
          <ul className="trm-price-list">
          <li className="trm-label">Custom Website Development</li>
            <li className="trm-labe">Website Maintenance and Support</li>
            <li className="trm-label">E-commerce Solutions</li>
            <li className="trm-label">Search Engine Optimization (SEO) Services</li>
          </ul>
          {/* price list end */}
          <a data-fancybox="" href="#trm-order" className="trm-btn">
            Order now <i className="fas fa-arrow-right" />
          </a>
        </div>
        {/* price table end */}
      </div>
    </div>
  );
};
export default Price;
