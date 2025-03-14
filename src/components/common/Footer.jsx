import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/Footer/footer-logo.png";
import footerSmLogo from "../../assets/images/Footer/footer-sm-logo.png";
import footerLocation from "../../assets/images/Footer/footer-Location.png";
import footerEmail from "../../assets/images/Footer/footer-Email.png";
import footerPhone from "../../assets/images/Footer/footer-Phone.png";
import footerTime from "../../assets/images/Footer/footer-Time.png";
import footerFacebook from "../../assets/images/Footer/footer-Facebook.png";
import footerInstagram from "../../assets/images/Footer/footer-Instagram.png";
import footerLine from "../../assets/images/Footer/footer-Line.png";
import footerYouTube from "../../assets/images/Footer/footer-YouTube.png";

function Footer() {
  return (
    <div className="footer-container-box">
      <div className="container">
        {/* Logo */}
        <div className="footer-logo mb-32 mb-xl-48">
          <Link to="/" className="footer-img-box">
            <picture>
              <source srcSet={footerSmLogo} media="(max-width:1200px)" />
              <img
                className="d-block mx-auto mb-12 mb-xl-0"
                src={footerLogo}
                alt="footer-logo"
              />
            </picture>
            <div className="text-nautral-white fs-32 fw-600 lh-12 d-xl-none">
              Come & Buy
            </div>
          </Link>
        </div>

        {/* 主體區域 */}
        <div className="main d-xl-flex justify-content-xl-between mb-xl-48">
          {/* 聯絡資訊 */}
          <div className="card-box mb-32 mx-auto mx-xl-0 mb-xl-0 d-xl-flex flex-xl-column justify-content-xl-between">
            <div className="card01 card-set mb-16">
              <div className="card-img-box">
                <img src={footerLocation} alt="地址" />
              </div>
              <div className="fs-16 fw-medium fs-xl-24 card-text footer-text-set text-white">
                地址：台中市大雅區神仙路1號
              </div>
            </div>
            <div className="card02 card-set mb-16">
              <div className="card-img-box">
                <img src={footerEmail} alt="Email" />
              </div>
              <div className="card-text footer-text-set">
                <a className="a-re text-white text-decoration-none" href="mailto:come_and_buy@comebuy.com" >
                  come_and_buy@comebuy.com
                </a>
              </div>
            </div>
            <div className="card03 card-set mb-16">
              <div className="card-img-box">
                <img src={footerPhone} alt="電話" />
              </div>
              <div className="card-text footer-text-set">
                <a className="a-re text-white text-decoration-none" href="tel:+886-4-9408-1688">
                  (04)9408-1688
                </a>
              </div>
            </div>
            <div className="card04 card-set">
              <div className="card-img-box">
                <img src={footerTime} alt="營業時間" />
              </div>
              <div className="card-text footer-text-set text-white text-decoration-none">9:00am - 18:00pm</div>
            </div>
          </div>

          {/* 連結導航 */}
          <div className="article">
            <div className="text-content d-flex gap-32 justify-content-center mb-32 gap-xl-48 mb-xl-48">
              <div className="text-box d-flex flex-column row-gap-16 row-gap-xl-24">
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/OestimatePage">
                    線上估價
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/IndexPage">
                    服務項目
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/IndexPage">
                    最新消息
                  </Link>
                </span>
              </div>
              <div className="text-box d-flex flex-column row-gap-16 row-gap-xl-24">
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/IndexPage">
                    材料介紹
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/AboutusPage">
                    設備介紹
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/AboutusPage">
                    專利介紹
                  </Link>
                </span>
              </div>
              <div className="text-box d-flex flex-column row-gap-16 row-gap-xl-24">
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/AboutusPage">
                    公司介紹
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/QaPage">
                    售後服務
                  </Link>
                </span>
                <span className="fs-16 fw-medium fs-xl-24 footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/QaPage">
                    運費說明
                  </Link>
                </span>
                <span className="fs-16 fw-medium d-xl-none footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/AboutusPage">
                    聯絡我們
                  </Link>
                </span>
              </div>
              <div className="text-box d-flex flex-column d-none d-xl-block">
                <span className="fs-xl-24 fw-medium footer-text-set">
                  <Link className="a-re text-white text-decoration-none" to="/AboutusPage">
                    聯絡我們
                  </Link>
                </span>
              </div>
            </div>

            {/* 社群媒體 */}
            <div className="footer-icon d-flex justify-content-center gap-32 mb-32 justify-content-xl-start mb-xl-0">
              <div className="footer-icon-box">
                <img src={footerFacebook} alt="Facebook" />
              </div>
              <div className="footer-icon-box">
                <img src={footerInstagram} alt="Instagram" />
              </div>
              <div className="footer-icon-box">
                <img src={footerLine} alt="Line" />
              </div>
              <div className="footer-icon-box">
                <img src={footerYouTube} alt="YouTube" />
              </div>
            </div>
          </div>
        </div>

        {/* 版權聲明 */}
        <div className="footer-text-set text-center px-12 fs-16 footer-footer-set mx-auto fs-xl-24 py-xl-48">
          Come_and_Buy © 2021, In Here. All Rights Reserved. 隱私權政策
        </div>
      </div>
    </div>
  );
}

export default Footer;
