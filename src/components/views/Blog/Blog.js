import React from 'react';
import port5 from "../../../assets/img/portfolio-5.jpg";
import port6 from "../../../assets/img/portfolio-6.jpg";
import port3 from "../../../assets/img/portfolio-3.jpg";
import port4 from "../../../assets/img/portfolio-4.jpg";

function Blog() {
  return (
    <div>
      ;<section className="bg-white bar">
        <div className="container">
          <div className="heading text-center">
            <h2>From the blog</h2>
          </div>
          <p className="lead">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames
            ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
            tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo.{" "}
            <a href="blog.html">Check our blog</a>
          </p>
          <div className="row">
            <div className="col-lg-3">
              <div className="home-blog-post">
                <div className="image">
                  <img src={port4} alt="..." className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <a href="#" className="btn btn-template-outlined-white">
                      <i className="fa fa-chain"> </i> Read More
                    </a>
                  </div>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Fashion Now </a>
                  </h4>
                  <p className="author-category">
                    By <a href="#">John Snow</a> in <a href="blog.html">Webdesign</a>
                  </p>
                  <p className="intro">
                    Fifth abundantly made Give sixth hath. Cattle creature i be dont
                    them behold green moved fowl Moved life us beast good yielding.
                    Have bring.
                  </p>
                  <a href="#" className="btn btn-template-outlined">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="home-blog-post">
                <div className="image">
                  <img src={port3} alt="..." className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <a href="#" className="btn btn-template-outlined-white">
                      <i className="fa fa-chain"> </i> Read More
                    </a>
                  </div>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">What to do</a>
                  </h4>
                  <p className="author-category">
                    By <a href="#">John Snow</a> in <a href="blog.html">Webdesign</a>
                  </p>
                  <p className="intro">
                    Fifth abundantly made Give sixth hath. Cattle creature i be dont
                    them behold green moved fowl Moved life us beast good yielding.
                    Have bring.
                  </p>
                  <a href="#" className="btn btn-template-outlined">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="home-blog-post">
                <div className="image">
                  <img src={port5} alt="" className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <a href="#" className="btn btn-template-outlined-white">
                      <i className="fa fa-chain"> </i> Read More
                    </a>
                  </div>
                </div>
                 <div className="text">
                  <h4>
                    <a href="#">5 ways to look</a>
                  </h4>
                  <p className="author-category">
                    By <a href="#">John Snow</a> in <a href="blog.html">Webdesign</a>
                  </p>
                 <p className="intro">
                    Fifth abundantly made Give sixth hath. Cattle creature i be dont
                    them behold green moved fowl Moved life us beast good yielding.
                    Have bring.
                  </p>
                  <a href="#" className="btn btn-template-outlined">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="home-blog-post">
                <div className="image">
                  <img src={port6} alt="..." className="img-fluid" />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <a href="#" className="btn btn-template-outlined-white">
                      <i className="fa fa-chain"> </i> Read More
                    </a>
                  </div>
                </div>
                <div className="text">
                  <h4>
                    <a href="#">Fashion Now </a>
                  </h4>
                  <p className="author-category">
                    By <a href="#">John Snow</a> in <a href="blog.html">Webdesign</a>
                  </p>
                  <p className="intro">
                    Fifth abundantly made Give sixth hath. Cattle creature i be dont
                    them behold green moved fowl Moved life us beast good yielding.
                    Have bring.
                  </p>
                  <a href="#" className="btn btn-template-outlined">
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Blog
