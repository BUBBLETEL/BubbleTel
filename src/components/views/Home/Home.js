import React from 'react'
import NavBarSlider from '../../commons/NavBarSlider/NavBarSlider'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <NavBarSlider />
      <section className="bar background-white">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-desktop" />
                </div>
                <h3 className="h4">Webdesign</h3>
                <p>
                  Fifth abundantly made Give sixth hath. Cattle creature i be dont
                  them behold green moved fowl Moved life us beast good yielding. Have
                  bring.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-print" />
                </div>
                <h3 className="h4">Print</h3>
                <p>
                  Advantage old had otherwise sincerity dependent additions. It in
                  adapted natural hastily is justice. Six draw you him full not mean
                  evil. Prepare garrets it expense windows shewing do an.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-globe" />
                </div>
                <h3 className="h4">SEO and SEM</h3>
                <p>
                  Am terminated it excellence invitation projection as. She graceful
                  shy believed distance use nay. Lively is people so basket ladies
                  window expect.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-lightbulb-o" />
                </div>
                <h3 className="h4">Consulting</h3>
                <p>
                  Fifth abundantly made Give sixth hath. Cattle creature i be dont
                  them behold green moved fowl Moved life us beast good yielding. Have
                  bring.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-envelope-o" />
                </div>
                <h3 className="h4">Email Marketing</h3>
                <p>
                  Advantage old had otherwise sincerity dependent additions. It in
                  adapted natural hastily is justice. Six draw you him full not mean
                  evil. Prepare garrets it expense windows shewing do an.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box-simple">
                <div className="icon-outlined">
                  <i className="fa fa-user" />
                </div>
                <h3 className="h4">UX</h3>
                <p>
                  Am terminated it excellence invitation projection as. She graceful
                  shy believed distance use nay. Lively is people so basket ladies
                  window expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
    </div>
  )
}

export default Home
