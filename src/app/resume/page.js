"use client";
import { context } from "../../../context/context";
import TrueManLayout from "../../../layout/TrueManLayout";
import { useContext, useEffect } from "react";
const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);
  useEffect(() => {
    banner_image_function("/img/banner2.jpg");
    page_info_function("My Skills<br>and History", "resume", "resume");
  }, []);
  return (
    <TrueManLayout>
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">English</h6>
                <span className="trm-label trm-label-light">Native</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Arabic</h6>
                <span className="trm-label trm-label-light">Native</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p90" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Spanish</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p80" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* skills */}
      <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Html</h6>
                <span className="trm-label trm-label-light">100%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">CSS</h6>
                <span className="trm-label trm-label-light">100%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">SCSS</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p80" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">jQuery</h6>
                <span className="trm-label trm-label-light">90%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p90" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Vue js</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Js</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* knowledge */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            knowledge <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Photoshop</li>
                  <li>Sketch</li>
                  <li>Figma</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Gulp</li>
                  <li>Sass</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Bootstrap</li>
                  <li>React js</li>
                  <li>Vue js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Employment History <span data-number={3} />
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
                    <h6 className="trm-mb-15">Qamar Labs</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2023 -Current</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                Role: Full Stack Next.js Developer

Company: QamarLabs

As a Full Stack Next.js Developer at QamarLabs, I developed high-performance web applications using Next.js for frontend and Node.js for backend. Key responsibilities included:

Frontend: Utilizing Next.js and React.js for UI development.
Backend: Implementing APIs with Node.js and integrating databases.
Collaborating with teams to translate requirements into technical solutions.
Achievements:

Led projects, ensuring timely delivery and client satisfaction.
Actively contributed to code reviews and knowledge sharing.
My role at QamarLabs allowed me to showcase expertise in full-stack development and contribute to project success.
                </div>
              
                
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
                    <h6 className="trm-mb-15">InterGalactic Marketing</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>March 2022 - Current</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                Key Responsibilities and Achievements:
Led the development and deployment of custom software applications, ranging from data analytics tools to customer relationship management (CRM) systems, driving efficiency and effectiveness in marketing strategies.
Provided expert consultancy services to clients, offering insights and recommendations on leveraging technology to enhance their marketing initiatives and achieve business objectives.
Contributed to the continuous improvement of internal processes and methodologies, fostering a culture of innovation and excellence within the organization.
Collaborated closely with marketing professionals, data scientists, and designers to translate business requirements into scalable and user-friendly software solutions.
Demonstrated proficiency in a wide range of programming languages and frameworks, including [list specific technologies relevant to your experience, e.g., Java, Python, JavaScript, etc.].
Played a pivotal role in client engagements, from initial scoping and requirements gathering to solution delivery and post-implementation support, ensuring high levels of client satisfaction and retention.
                </div>
                
              </div>
            </div>
          </div>
          {/* timeline end */}
        </div>
    </div>
        
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
