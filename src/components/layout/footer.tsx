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
                <Link className="navbar-brand align-items-center" href="index">
                  <span>
                    Oakberry <small>Real Estate Agency</small>
                  </span>
                </Link>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul className="ftco-footer-social list-unstyled mt-2">
                <li>
                  <Link href="index">
                    <span className="fa fa-twitter"></span>
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-facebook"></span>
                  </Link>
                </li>
                <li>
                  <Link href="index">
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
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>Agents
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>
                    Locations
                  </Link>
                </li>
                <li>
                  <Link href="index">
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
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>Home
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>About
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>Blog
                  </Link>
                </li>
                <li>
                  <Link href="index">
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
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>Terms
                    &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>User's
                    Guide
                  </Link>
                </li>
                <li>
                  <Link href="index">
                    <span className="fa fa-chevron-right mr-2"></span>Support
                    Center
                  </Link>
                </li>
                <li>
                  <Link href="index">
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
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <Link href="index">
                      <span className="icon fa fa-phone"></span>
                      <span className="text">+2 392 3929 210</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="index">
                      <span className="icon fa fa-paper-plane pr-4"></span>
                      <span className="text">
                        <span
                          className="__cf_email__"
                          data-cfemail="6a03040c052a13051f180e05070b030444090507"
                        >
                          [email&#160;protected]
                        </span>
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
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                All rights reserved | This template is made with
                <i
                  className="fa fa-heart color-danger"
                  aria-hidden="true"
                ></i>{" "}
                by
                <Link
                  href="https://colorlib.com"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Colorlib
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
