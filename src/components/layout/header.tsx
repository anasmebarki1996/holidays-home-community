import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation("");

  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng: string) => {
    setLanguage(lng);
  };

  useEffect(() => {
    console.log(i18n.language);
    setLanguage(i18n.language);
  }, [i18n.language]);

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
                  <span>Free Call</span> <span>+971 56 870 8213</span>
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
                <p className="con">Ibn Battuta Gate Office, 404A</p>
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
                <div className="language">
                  <Link
                    className={language === "en" ? "active" : ""}
                    href="/"
                    locale={"en"}
                  >
                    English
                  </Link>
                  <Link
                    className={language === "rs" ? "active" : ""}
                    href="/"
                    locale={"rs"}
                  >
                    Russian
                  </Link>
                  <Link
                    className={language === "ar" ? "active" : ""}
                    href="/"
                    locale={"ar"}
                  >
                    Arabic
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  ftco-navbar-light">
        <div className="container-xl">
          <Link className="-brand align-items-center" href="/">
            <span style={{ textAlign: "center" }}>
              HHC <small>Holiday Homes community</small>
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
                <Link className="nav-link" href="/holiday-homes">
                  Holiday Homes
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
              <Link href="/" className="btn btn-primary rounded">
                Join us
              </Link>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};
