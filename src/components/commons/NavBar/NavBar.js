import React from 'react'
import logo from "../../../assets/img/logo.png"
import logoSmall from "../../../assets/img/logo-small.png";
import homeTemp from "../../../assets/img/template-homepage.png";

const NavBar = () => {
  return (
    <div>
      <header className="nav-holder make-sticky">
        <div id="navbar" role="navigation" className="navbar navbar-expand-lg">
          <div className="container">
            <a href="/" className="navbar-brand home">
              <img
                src={logo}
                alt="true"
                className="d-none d-md-inline-block"
              />
              <img
                src={logoSmall}
                alt="true"
                className="d-inline-block d-md-none"
              />
              <span className="sr-only">Universal - go to homepage</span>
            </a>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              className="navbar-toggler btn-template-outlined"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="fa fa-align-justify" />
            </button>
            <div id="navigation" className="navbar-collapse collapse">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item dropdown active">
                  <a
                    href="javascript: void(0)"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                  >
                    Home <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="/" className="nav-link">
                        Option 1: Default Page
                      </a>
                    </li>
                    {/* <li className="dropdown-item">
                      <a href="index2.html" className="nav-link">
                        Option 2: Application
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="index3.html" className="nav-link">
                        Option 3: Startup
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="index4.html" className="nav-link">
                        Option 4: Agency
                      </a>
                    </li> */}
                    <li className="dropdown-item dropdown-submenu">
                      <a
                        id="navbarDropdownMenuLink2"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        className="nav-link dropdown-toggle"
                      >
                        Dropdown link
                      </a>
                      <ul
                        aria-labelledby="navbarDropdownMenuLink2"
                        className="dropdown-menu"
                      >
                        <li className="dropdown-item">
                          <a href="#" className="nav-link">
                            Action
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="nav-link">
                            Another action
                          </a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#" className="nav-link">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown menu-large">
                  <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                    Features
                    <b className="caret" />
                  </a>
                  <ul className="dropdown-menu megamenu">
                    <li>
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={homeTemp}
                            alt="true"
                            className="img-fluid d-none d-lg-block"
                          />
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h5>Shortcodes</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="template-accordions.html" className="nav-link">
                                Accordions
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-alerts.html" className="nav-link">
                                Alerts
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-buttons.html" className="nav-link">
                                Buttons
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="template-content-boxes.html"
                                className="nav-link"
                              >
                                Content boxes
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-blocks.html" className="nav-link">
                                Horizontal blocks
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-pagination.html" className="nav-link">
                                Pagination
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-tabs.html" className="nav-link">
                                Tabs
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="template-typography.html" className="nav-link">
                                Typography
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h5>Header variations</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a
                                href="template-header-default.html"
                                className="nav-link"
                              >
                                Default sticky header
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="template-header-nosticky.html"
                                className="nav-link"
                              >
                                No sticky header
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="template-header-light.html"
                                className="nav-link"
                              >
                                Light header
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown menu-large">
                  <a href="#" data-toggle="dropdown" className="dropdown-toggle">
                    Portfolio <b className="caret" />
                  </a>
                  <ul className="dropdown-menu megamenu">
                    <li>
                      <div className="row">
                        <div className="col-lg-6">
                          <img
                            src={homeTemp}
                            alt="home Page"
                            className="img-fluid d-none d-lg-block"
                          />
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h5>Portfolio</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="portfolio-2.html" className="nav-link">
                                2 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-2.html"
                                className="nav-link"
                              >
                                2 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-3.html" className="nav-link">
                                3 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-3.html"
                                className="nav-link"
                              >
                                3 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-4.html" className="nav-link">
                                4 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-4.html"
                                className="nav-link"
                              >
                                4 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-detail.html" className="nav-link">
                                Portfolio - detail
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-detail-2.html" className="nav-link">
                                Portfolio - detail 2
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h5>Home</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="/technology" className="nav-link">
                                About us
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team.html" className="nav-link">
                                Our team
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team-member.html" className="nav-link">
                                Team member
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="services.html" className="nav-link">
                                Services
                              </a>
                            </li>
                          </ul>
                          <h5>Marketing</h5>
                          <ul className="list-unstyled">
                            <li className="nav-item">
                              <a href="packages.html" className="nav-link">
                                Packages
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown menu-large">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay={200}
                    className="dropdown-toggle"
                  >
                    Services <b className="caret" />
                  </a>
                  <ul className="dropdown-menu megamenu">
                    <li>
                      <div className="row">
                        <div className="col-md-6 col-lg-3">
                          <h5>Home</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="/" className="nav-link">
                                Option 1: Default Page
                              </a>
                            </li>
                            {/* <li className="nav-item">
                              <a href="index2.html" className="nav-link">
                                Option 2: Application
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="index3.html" className="nav-link">
                                Option 3: Startup
                              </a>
                            </li> 
                            <li className="nav-item">
                              <a href="index4.html" className="nav-link">
                                Option 4: Agency
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="index5.html" className="nav-link">
                                Option 5: Portfolio
                              </a>
                            </li>*/}
                          </ul>
                          <h5>Technology</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="about.html" className="nav-link">
                                About us
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team.html" className="nav-link">
                                Our team
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="team-member.html" className="nav-link">
                                Team member
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="services.html" className="nav-link">
                                Services
                              </a>
                            </li>
                          </ul>
                          <h5>Marketing</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="packages.html" className="nav-link">
                                Packages
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <h5>Branding</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="portfolio-2.html" className="nav-link">
                                2 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-2.html"
                                className="nav-link"
                              >
                                2 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-3.html" className="nav-link">
                                3 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-3.html"
                                className="nav-link"
                              >
                                3 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-4.html" className="nav-link">
                                4 columns
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="portfolio-no-space-4.html"
                                className="nav-link"
                              >
                                4 columns with negative space
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-detail.html" className="nav-link">
                                Portfolio - detail
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="portfolio-detail-2.html" className="nav-link">
                                Portfolio - detail 2
                              </a>
                            </li>
                          </ul>
                          <h5>Consulting</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="customer-register.html" className="nav-link">
                                Register / login
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="customer-orders.html" className="nav-link">
                                Orders history
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="customer-order.html" className="nav-link">
                                Order history detail
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="customer-wishlist.html" className="nav-link">
                                Wishlist
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="customer-account.html" className="nav-link">
                                Customer account / change password
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          <h5>Products</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="shop-category.html" className="nav-link">
                                Category - sidebar right
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-category-left.html" className="nav-link">
                                Category - sidebar left
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-category-full.html" className="nav-link">
                                Category - full width
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-detail.html" className="nav-link">
                                Product detail
                              </a>
                            </li>
                          </ul>
                          <h5>Training &  Capacity Development</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="shop-basket.html" className="nav-link">
                                Shopping cart
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-checkout1.html" className="nav-link">
                                Checkout - step 1
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-checkout2.html" className="nav-link">
                                Checkout - step 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-checkout3.html" className="nav-link">
                                Checkout - step 3
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="shop-checkout4.html" className="nav-link">
                                Checkout - step 4
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-lg-3">
                          {/*<h5>Contact</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="/contact-us" className="nav-link">
                                Contact
                              </a>
                            </li>
                             <li className="nav-item">
                              <a href="contact2.html" className="nav-link">
                                Contact - version 2
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="contact3.html" className="nav-link">
                                Contact - version 3
                              </a>
                            </li> 
                          </ul>*/}
                          <h5>Books Publishing</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="text.html" className="nav-link">
                                Text page
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="text-left.html" className="nav-link">
                                Text page - left sidebar
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="text-full.html" className="nav-link">
                                Text page - full width
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="faq.html" className="nav-link">
                                FAQ
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="404.html" className="nav-link">
                                404 page
                              </a>
                            </li>
                          </ul>
                          {/* <h5>Blog</h5>
                          <ul className="list-unstyled mb-3">
                            <li className="nav-item">
                              <a href="blog.html" className="nav-link">
                                Blog listing big
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="blog-medium.html" className="nav-link">
                                Blog listing medium
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="blog-small.html" className="nav-link">
                                Blog listing small
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="blog-post.html" className="nav-link">
                                Blog Post
                              </a>
                            </li>
                          </ul> */}
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="javascript: void(0)"
                    data-toggle="dropdown"
                    className="dropdown-toggle"
                  >
                    Contact <b className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item">
                      <a href="/contact-us" className="nav-link">
                        Contact option 1
                      </a>
                    </li>
                    {/* <li className="dropdown-item">
                      <a href="contact2.html" className="nav-link">
                        Contact option 2
                      </a>
                    </li>
                    <li className="dropdown-item">
                      <a href="contact3.html" className="nav-link">
                        Contact option 3
                      </a>
                    </li> */}
                  </ul>
                </li>
              </ul>
            </div>
            <div id="search" className="collapse clearfix">
              <form role="search" className="navbar-form">
                <div className="input-group">
                  <input type="text" placeholder="Search" className="form-control" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-template-main">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default NavBar
