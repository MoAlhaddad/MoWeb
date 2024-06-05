const Footer = () => {
  return (
    <footer
      className="trm-scroll-animation"
      data-scroll=""
      data-scroll-offset={50}
    >
      <div className="trm-label">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
      <div className="trm-label">
        Developed by:{" "}
        
          Mohamad Alhaddad
      
      </div>
    </footer>
  );
};
export default Footer;
