import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

const AgentsPage = () => {
  return (
    <>
      <section
        className="hero-wrap hero-wrap-2"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-9 pt-5 text-center">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <Link href="/">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Our Agents <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Our Agents</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-agent">
        <div className="container-xl">
          <div className="row">
            <div
              className="col-md-3"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="600"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="700"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos-delay="800"
              data-aos-duration="1000"
            >
              <div className="agent">
                <div className="img">
                  <img
                    src="images/person.jpg"
                    className="img-fluid"
                    alt="Colorlib Template"
                  />
                </div>
                <div className="desc">
                  <p className="h-info">
                    <span className="position">Listing</span>{" "}
                    <span className="details">10 Properties</span>
                  </p>
                  <h3>
                    <Link href="properties">Daniel</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="agents"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const nextI18n = await serverSideTranslations(locale ?? "en", ["common"]);
  return {
    props: {
      ...nextI18n,
    },
  };
};

export default AgentsPage;
