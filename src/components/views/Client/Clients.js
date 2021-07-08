import React from 'react';
import cust1 from "../../../assets/img/customer-1.png"
import cust2 from "../../../assets/img/customer-2.png";
import cust3 from "../../../assets/img/customer-3.png";
import cust4 from "../../../assets/img/customer-4.png";
import cust5 from "../../../assets/img/customer-5.png";
import cust6 from "../../../assets/img/customer-6.png";


const Clients = () => {
  return (
    <div>
      <section className="bar bg-gray">
        <div className="container">
          <div className="heading text-center">
            <h2>Our Clients</h2>
          </div>
          <ul className="list-unstyled owl-carousel customers no-mb">
            <li className="item">
              <img src={cust1} alt className="img-fluid" />
            </li>
            <li className="item">
              <img src={cust2} alt className="img-fluid" />
            </li>
            <li className="item">
              <img src={cust3} alt className="img-fluid" />
            </li>
            <li className="item">
              <img src={cust4} alt className="img-fluid" />
            </li>
            <li className="item">
              <img src={cust5} alt className="img-fluid" />
            </li>
            <li className="item">
              <img src={cust6} alt className="img-fluid" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Clients;
