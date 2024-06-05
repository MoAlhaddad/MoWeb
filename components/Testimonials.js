import { sliderProps } from "../utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          Testimonials <span data-number={9} />
        </h5>

        {/* testimonials slider */}
        <Swiper
          {...sliderProps.testimonials}
          className="swiper-container trm-testimonials-slider trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/joaquin.jpg" alt="Client" />
                <h6 className="trm-mb-15">Joaquin Dones</h6>
                <div className="trm-text-sm trm-accent-color">
                  <a href="https://www.linkedin.com/in/joaquindones/">Chief Operative Manager at InterGalactic Marketing</a>
                </div>
              </div>
              <div className="trm-testimonial-text">
                <p>
                "It's my pleasure to provide a glowing testimonial for Mohamad Alhaddad, our exceptional Fullstack Software Developer here at InterGalacticMarketing. Throughout his tenure, he has consistently demonstrated unparalleled dedication, expertise, and innovation in every project he undertakes.

Mohamad is not just a skilled developer; Hey is a strategic thinker with a keen eye for detail and a passion for excellence. He possesses a rare blend of technical proficiency, creativity, and problem-solving prowess, which he applies with precision to tackle even the most complex challenges.

One of MOhamad's greatest strengths is his ability to seamlessly bridge the gap between frontend and backend development, delivering holistic solutions that are not only robust and scalable but also aesthetically pleasing and user-friendly. He consistently goes above and beyond to ensure that our software products not only meet but exceed our clients' expectations.

Beyond his technical skills, Mohamad Alhaddad is an invaluable team player, always willing to collaborate, share knowledge, and mentor others.  He brings a positive attitude and a spirit of camaraderie to every project, inspiring those around him to strive for excellence and achieve their full potential.

In summary, Mohamad is a true asset to our team, and I have no hesitation in recommending him for any software development role. He has consistently proven his ability to deliver exceptional results and drive success for our organization. I have no doubt that he will continue to excel and make significant contributions wherever he goes."

Warm regards,

Joaquin Dones
Chief Operating Officer


                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="trm-testimonial-card"
              data-swiper-parallax=""
              data-swiper-parallax-scale=".8"
              data-swiper-parallax-opacity={0}
              data-swiper-parallax-duration={800}
            >
              <div className="trm-testimonial-author">
                <img src="/img/testimonials/buchi.jpg" alt="Client" />
                <h6 className="trm-mb-15">Buchi Obi</h6>
                <div className="trm-text-sm trm-accent-color">
                  <a href='https://www.linkedin.com/in/oobi/'>Product Manager at Spawnn Gaming</a>
                </div>
              </div>
              <div className="trm-testimonial-text">
              <p>
                "It is with great pleasure that I offer this testimonial for Mohamad, who served as a Full Stack Developer Intern at Spawn Gaming. Throughout his internship, he showcased an exceptional level of skill, dedication, and innovation that significantly contributed to the success of our projects.

During his time with us, Mohamad took on a range of responsibilities with enthusiasm and proficiency. One of his notable achievements was the seamless integration of the Mux Video API into our platform. Through his meticulous attention to detail and problem-solving abilities, he ensured that the integration was not only smooth but also optimized for performance and scalability.

Furthermore, Mohamad played a pivotal role in enhancing our React application by converting it into a Next.js application using TypeScript. This transition not only improved the maintainability and performance of our application but also laid the foundation for future enhancements and optimizations.

In addition to his technical contributions, Mohamad demonstrated excellent communication and collaboration skills, working effectively with team members to ensure alignment and achieve project goals. He approached every task with a positive attitude and a willingness to learn, making his internship experience both enriching and impactful.

Overall, Mohamad exceeded our expectations as an intern, leaving a lasting impression with his professionalism, expertise, and passion for software development. He would be a valuable asset to any team, and I have no doubt that he will continue to excel in his future endeavors."

Warm regards,

Onyebuchi Buchi
Product Manager
Spawn Gaming
                </p>
              </div>
            </div>
          </SwiperSlide>
          
          
          <div className="trm-slider-navigation">
            <div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
              <i className="fas fa-arrow-left" />
            </div>
            <div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
              <i className="fas fa-arrow-right" />
            </div>
          </div>
        </Swiper>
        {/* testimonials slider end */}
      </div>
    </div>
  );
};
export default Testimonials;
