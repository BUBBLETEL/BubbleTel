import React from 'react'


function FooterBootom() {
  return (
    <div>
      <footer className="main-footer">
        <div className="copyrights">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center-md">
                <p>© 2020. Edustrings | Getting things done</p>
                <h4>&copy; {new Date().getFullYear()}</h4>
              </div>
              <div className="col-lg-8 text-right text-center-md">
                <p>
                  copyrights{" "}
                  <a href="https://bootstrapious.com/snippets"> Design By | GTstrides | Bubbletel Team </a>&amp;{" "}
                  <a href="https://fity.cz/">Godstime</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FooterBootom
