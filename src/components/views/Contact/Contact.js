import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Contact extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
        <div id="heading-breadcrumbs" className="brder-top-0 border-bottom-0">
          <div className="container">
            <div className="row d-flex align-items-center flex-wrap">
              <div className="col-md-7">
                <h1 className="h2">Contact</h1>
              </div>
              <div className="col-md-5">
                <ul className="breadcrumb d-flex justify-content-end">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div id="contact" className="container">
            <section className="bar">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading">
                    <h2>We are here to help you</h2>
                  </div>
                  <p className="lead">
                    Are you curious about something? Do you have some kind of problem
                    with our products? As am hastily invited settled at limited
                    civilly fortune me. Really spring in extent an by. Judge but built
                    gay party world. Of so am he remember although required. Bachelor
                    unpacked be advanced at. Confined in declared marianne is
                    vicinity.
                  </p>
                  <p className="text-sm">
                    Please feel free to contact us, our customer service center is
                    working for you 24/7.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="row text-center">
                <div className="col-md-4">
                  <div className="box-simple">
                    <div className="icon-outlined">
                      <i className="fa fa-map-marker" />
                    </div>
                    <h3 className="h4">Address</h3>
                    <p>
                      13/25 New Avenue
                      <br /> New Heaven, 45Y 73J
                      <br /> England, <strong>Great Britain</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box-simple">
                    <div className="icon-outlined">
                      <i className="fa fa-phone" />
                    </div>
                    <h3 className="h4">Call center</h3>
                    <p>
                      This number is toll free if calling from Great Britain otherwise
                      we advise you to use the electronic form of communication.
                    </p>
                    <p>
                      <strong>+33 555 444 333</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box-simple">
                    <div className="icon-outlined">
                      <i className="fa fa-envelope" />
                    </div>
                    <h3 className="h4">Electronic support</h3>
                    <p>
                      Please feel free to write an email to us or to use our
                      electronic ticketing system.
                    </p>
                    <ul className="list-unstyled text-sm">
                      <li>
                        <strong>
                          <a href="mailto:">info@fakeemail.com</a>
                        </strong>
                      </li>
                      <li>
                        <strong>
                          <a href="#">Ticketio</a>
                        </strong>{" "}
                        - our ticketing support platform
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="bar pt-0">
              <div className="row">
                <div className="col-md-12">
                  <div className="heading text-center">
                    <h2>Contact form</h2>
                  </div>
                </div>
                <div className="col-md-8 mx-auto">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="firstname">First Name</label>
                          <input
                            id="firstname"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="lastname">Last Name</label>
                          <input id="lastname" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input id="email" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input id="subject" type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea
                            id="message"
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12 text-center">
                        <button type="submit" className="btn btn-template-outlined">
                          <i className="fa fa-envelope-o" /> Send message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}
