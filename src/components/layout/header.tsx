import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="py-4 top-wrap">
        <div className="container-xl">
          <div className="row d-flex align-items-start">
            <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-map"></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="con">
                  <span>Free Call</span> <span>+1 234 456 78910</span>
                </p>
                <p className="con">Call Us Now 24/7 Customer Support</p>
              </div>
            </div>
            <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane"></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="hr">
                  <span>Our Location</span>
                </p>
                <p className="con">Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className="col-md topper d-flex mb-md-0 align-items-xl-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-connectdevelop"></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="con">
                  <span>Connect </span> <span>with us</span>
                </p>
                <p className="con">
                  <Link href="index">Facebook</Link>{" "}
                  <Link href="index">Twitter</Link>{" "}
                  <Link href="index">Dribbble</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <Link className="navbar-brand align-items-center" href="index">
            <span>
              Oakberry <small>Real Estate Agency</small>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="properties">
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="agents">
                  Agents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="contact">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="mb-0">
              <Link href="index" className="btn btn-primary rounded">
                Submit A Property
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};
