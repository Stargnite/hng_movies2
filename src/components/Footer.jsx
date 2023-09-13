import './footer.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
      {/* <FontAwesomeIcon icon="fa-twitter" /> */}
      </div>
      <div className="links">
        <p>Conditions of use</p>
        <p>Privacy & policy</p>
        <p>Press Room</p>
      </div>
      <div className="copyright">2021 MovieBox by Adriana Eka Prayudha</div>
    </div>
  );
};

export default Footer;
