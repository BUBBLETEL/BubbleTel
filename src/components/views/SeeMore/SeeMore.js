import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SeeMore extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <section
          // style={{

          //   background: `url("/assets/img/fixed-background-2.jpg") ,`,
            
          //   backgroundSize: "cover"
          // }}
          className="seeMore-img bar no-mb color-white text-center bg-fixed relative-positioned"
        >
          <div className="dark-mask" />
          <div className="container">
            <div className="icon icon-outlined icon-lg">
              <i className="fa fa-file-code-o" />
            </div>
            <h3 className="text-uppercase">Do you want to see more?</h3>
            <p className="lead">
              We have prepared for you more than 40 different HTML pages, including 5
              variations of homepage.
            </p>
            <p className="text-center">
              <a href="index2.html" className="btn btn-template-outlined-white btn-lg">
                See another homepage
              </a>
            </p>
          </div>
        </section>

      </div>
    )
  }
}
