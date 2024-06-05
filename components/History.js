const History = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Employment History <span data-number={7} />
        </h5>
      </div>
      <div className="col-lg-6">
        {/* timeline */}
        <div className="trm-timeline">
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Indian River State</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>June 2023 - December 2024</i>
                  </div>
                </div>
              </div>
              <div className="trm-mb-20">
              Student at Indian River State College, maintaining a 3.6 GPA while completing an Associate of Arts (AA) degree in Engineering.
Consistently achieving high academic performance, balancing coursework and extracurricular activities effectively.
Actively engaging with challenging engineering curriculum to cultivate a strong foundation of knowledge and skills.
Demonstrating exceptional dedication to learning and academic excellence in pursuit of professional goals.
              </div>
              <a
                data-fancybox
                href="files/diploma.jpg"
                className="trm-label trm-label-color"
              >
                Diploma <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div
            className="trm-timeline-item trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-timeline-mark-light" />
            <div className="trm-timeline-mark" />
            <div className="trm-a trm-timeline-content">
              <div className="trm-card-header">
                <div className="trm-left-side">
                  <h6 className="trm-mb-15">Springboard Coding BootCamp</h6>
                  <div className="trm-text-sm trm-accent-color trm-mb-15">
                    <i>jan 2020 - may 2021</i>
                  </div>
                </div>
              </div>
              <div className="trm-mb-20">
              Skills Acquired:

Proficiency in modern programming languages such as Python, JavaScript, and Java.
Mastery of software development frameworks and tools including React.js, Node.js, and Git.
Comprehensive understanding of software engineering principles, including algorithms, data structures, and design patterns.
Hands-on experience in developing full-stack web applications from conception to deployment.
Ability to collaborate effectively within agile development teams and communicate technical concepts to non-technical stakeholders.
              </div>
              <a
                data-fancybox
                href="files/diploma.jpg"
                className="trm-label trm-label-color"
              >
                Diploma <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
       
            </div>
          </div>
      
   
  );
};
export default History;
