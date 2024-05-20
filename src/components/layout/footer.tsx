import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="ftco-footer">
      <div className="container-xl">
        <div className="row mb-5 pb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <Link className="navbar-brand align-items-center" href="/">
                  <span>
                    HHC <small>Holiday Homes community</small>
                  </span>
                </Link>
              </h2>
              <p>
                Join our exclusive holiday homes community and experience luxury
                living in Dubai. Enjoy world-class amenities, stunning views,
                and the perfect retreat for any occasion.
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li>
                  <Link href="/">
                    <span className="fa fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-facebook"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-instagram"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Offers</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Agents
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Clients
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Company</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Home
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>About
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Blog
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Terms
                    &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>
                    {"User's"} Guide
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Support
                    Center
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className="fa fa-chevron-right mr-2"></span>Press Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon fa fa-map marker"></span>
                    <span className="text">
                      Ibn Battuta Gate Office, 404A - Dubai, UAE
                    </span>
                  </li>
                  <li>
                    <Link href="https://wa.me/+971568708213" target="_blank">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+971 56 870 8213</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:Bilal@vayk.ae">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">
                        <span className="__cf_email__">Bilal@vayk.ae</span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-darken">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p
                className="mb-0"
                style={{ color: "rgba(255,255,255,.5)", fontSize: "13px" }}
              >
                Copyright &copy; All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
