import GetTouch from "@/components/get-touch.component";
import Testimonial from "@/components/testimonial.component";
import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

const about = () => {
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
                  About us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-about-section">
        <div className="container-xl">
          <div className="row g-xl-5">
            <div className="col-md-4 d-flex align-items-stretch">
              <div
                className="img w-100"
                style={{ backgroundImage: "url('/images/about.jpg')" }}
              ></div>
            </div>
            <div className="col-md-8 heading-section">
              <span className="subheading">About Us</span>
              <h2 className="mb-4">HHC: A Holiday Homes Community</h2>
              <p>
                Nestled in the heart of Dubai, HHC offers a luxurious collection
                of holiday homes that redefine comfort and elegance. Our
                exclusive community provides a perfect retreat for families,
                couples, and groups seeking an exceptional vacation experience.{" "}
              </p>
              <div className="row py-5">
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count1" className="counter" data-count="50">
                          +2
                        </span>
                      </span>
                      <p>Years of Experienced</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count2" className="counter" data-count="210">
                          150
                        </span>
                        +
                      </span>
                      <p>Total Properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap" data-aos-delay="200">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count2" className="counter" data-count="450">
                          10
                        </span>
                      </span>
                      <p>Qualified Realtors</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap" data-aos-delay="300">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count2" className="counter" data-count="100">
                          4
                        </span>
                      </span>
                      <p>Total Branches</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="img img-2"
                style={{ backgroundImage: "url('/images/about-1.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="img vid-section"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-6 vid-height d-flex align-items-center justify-content-center text-center">
              <div className="video-wrap">
                <h3>Modern House Video</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                {/* <Link
                  href="about"
                  className="video-icon d-flex align-items-center justify-content-center"
                >
                  <span className="ion-ios-play"></span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetTouch />
      <Testimonial />
      <section className="ftco-gallery">
        <div className="container-xl-fluid">
          <div className="row g-0">
            <div className="col-md-2">
              <Link
                href="images/gallery-1.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-2">
              <Link
                href="images/gallery-1.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-2.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-2">
              <Link
                href="images/gallery-3.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-3.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-2">
              <Link
                href="images/gallery-4.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-4.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-2">
              <Link
                href="images/gallery-5.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-5.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
            </div>
            <div className="col-md-2">
              <Link
                href="images/gallery-6.jpg"
                className="gallery-wrap img d-flex align-items-center justify-content-center glightbox"
                style={{ backgroundImage: "url('/images/gallery-6.jpg')" }}
              >
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-search"></span>
                </div>
              </Link>
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

export default about;
