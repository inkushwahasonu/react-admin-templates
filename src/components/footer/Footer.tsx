import "./Footer.scss";

import TeckatLogo from "../../assets/images/icons/teckat-logo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_left_area">
          {/* <div className="copyright"> © 2023 MTNL | All Rights Reserved.</div> */}
        </div>
        <div className="created_by">
          <div className="creates_by_title">Created by: </div>
          <div className="company">
            <a
              href="http://teckat.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TeckatLogo} alt="" />
              Teckat.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
