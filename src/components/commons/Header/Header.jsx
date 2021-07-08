import React from 'react'

const Header = () => {
  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 d-md-block d-none">
              <p>Contact us on +420 777 555 333 or hello@universal.com.</p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-between">
                <ul className="list-inline contact-info d-block d-md-none">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-phone" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
                <div className="login">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-modal"
                    className="login-btn"
                  >
                    <i className="fa fa-sign-in" />
                    <span className="d-none d-md-inline-block">Sign In</span>
                  </a>
                  <a href="customer-register.html" className="signup-btn">
                    <i className="fa fa-user" />
                    <span className="d-none d-md-inline-block">Sign Up</span>
                  </a>
                </div>
                <ul className="social-custom list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="login-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="login-modalLabel"
        aria-hidden="true"
        className="modal fade"
      >
        <div role="document" className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 id="login-modalLabel" className="modal-title">
                Customer Login
              </h4>
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                className="close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="customer-orders.html" method="get">
                <div className="form-group">
                  <input
                    id="email_modal"
                    type="text"
                    placeholder="email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="password_modal"
                    type="password"
                    placeholder="password"
                    className="form-control"
                  />
                </div>
                <p className="text-center">
                  <button className="btn btn-template-outlined">
                    <i className="fa fa-sign-in" /> Log in
                  </button>
                </p>
              </form>
              <p className="text-center text-muted">Not registered yet?</p>
              <p className="text-center text-muted">
                <a href="customer-register.html">
                  <strong>Register now</strong>
                </a>
                ! It is easy and done in 1&nbsp;minute and gives you access to special
                discounts and much more!
              </p>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Header
