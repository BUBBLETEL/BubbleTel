import React from 'react'
import logo from "../../../assets/img/logo.png"
import homePageTem from "../../../assets/img/template-homepage.png"
import homeMac from "../../../assets/img/template-mac.png"
import tempEasy from "../../../assets/img/template-easy-code.png"
import esayCustomize from "../../../assets/img/template-easy-customize.png";

const NavBarSlider = () => {
  return (
    <div>
      <section className="navbarSlider bar background-white relative-positioned">
        <div className="container">
          <div className="home-carousel">
            <div className="dark-mask mask-primary" />
            <div className="container">
              <div className="homepage owl-carousel">
                <div className="item">
                  <div className="row">
                    <div className="col-md-5 text-right">
                      <p>
                        <img src={logo} alt className="ml-auto" />
                      </p>
                      <h1>Multipurpose responsive theme</h1>
                      <p>
                        Business. Corporate. Agency.
                        <br />
                        Portfolio. Blog. E-commerce.
                      </p>
                    </div>
                    <div className="col-md-7">
                      <img
                        src={homePageTem}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-7 text-center">
                      <img src={homeMac} alt className="img-fluid" />
                    </div>
                    <div className="col-md-5">
                      <h2>46 HTML pages full of features</h2>
                      <ul className="list-unstyled">
                        <li>Sliders and carousels</li>
                        <li>4 Header variations</li>
                        <li>
                          Google maps, Forms, Megamenu, CSS3 Animations and much more
                        </li>
                        <li>+ 11 extra pages showing template features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-5 text-right">
                      <h1>Design</h1>
                      <ul className="list-unstyled">
                        <li>Clean and elegant design</li>
                        <li>Full width and boxed mode</li>
                        <li>Easily readable Roboto font and awesome icons</li>
                        <li>7 preprepared colour variations</li>
                      </ul>
                    </div>
                    <div className="col-md-7">
                      <img
                        src={esayCustomize}
                        alt
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-7">
                      <img
                        src={tempEasy}
                        alt
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-5">
                      <h1>Easy to customize</h1>
                      <ul className="list-unstyled">
                        <li>7 preprepared colour variations.</li>
                        <li>Easily to change fonts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel End*/}
        </div>
      </section>

    </div>
  )
}

export default NavBarSlider
