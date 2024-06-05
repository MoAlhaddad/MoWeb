import Link from "next/link";

const Publications = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Latest Publications <span data-number={10} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* blog card */}
        <div
          className="trm-blog-card trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
         Work In Progess....
        </div>
        {/* blog card end */}
      </div>
    </div>
  );
};
export default Publications;
