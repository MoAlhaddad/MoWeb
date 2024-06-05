const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My story <span data-number={1} />
        </h5>
        {/* quote */}
        <blockquote
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >Hello there! I'm a passionate software engineer with a dynamic journey that's taken me from the immersive learning environment of Springboard Bootcamp to the exhilarating realm of game development as an intern at Spawn Gaming. Fluent in three languages—Arabic, Spanish, and English—I thrive on the interplay of diverse cultures and perspectives.

        Beyond coding, you'll often find me on the soccer field, where my love for the game fuels my competitive spirit and team mentality. Currently pursuing my engineering aspirations at IRSC in the Engineering A.A. program, I'm constantly seeking new challenges and opportunities to grow both personally and professionally.
        
        With a blend of technical expertise, linguistic versatility, and a fervent dedication to my passions, I'm excited to contribute my skills and enthusiasm to innovative projects and collaborative environments.
        
        Let's build something great together!
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
