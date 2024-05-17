import Link from "next/link";
import React from "react";

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
                  <Link href="index">
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
              <h2 className="mb-4">Oakberry A Real Estate Company</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <div className="row py-5">
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count1" className="counter" data-count="50">
                          0
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
                          0
                        </span>
                        K+
                      </span>
                      <p>Total Properties</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count2" className="counter" data-count="450">
                          0
                        </span>
                      </span>
                      <p>Qualified Realtors</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3">
                  <div className="counter-wrap">
                    <div className="text">
                      <span className="d-block number gradient-text">
                        <span id="count2" className="counter" data-count="100">
                          0
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
                <Link
                  href="about"
                  className="video-icon d-flex align-items-center justify-content-center"
                >
                  <span className="ion-ios-play"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-intro ftco-no-pt ftco-no-pb img"
        style={{ backgroundImage: "url('/images/bg_4.jpg')" }}
      >
        <div className="overlay"></div>
        <div className="container-xl py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row">
                <div className="col-md-8 d-flex align-items-center">
                  <div>
                    <h1 className="mb-0">Find Best Place For Leaving</h1>
                    <p>Find Best Place For Leaving</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-center">
                  <p className="mb-0">
                    <Link href="about" className="btn btn-black py-3 px-4">
                      Get in touch
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section testimony-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center pb-4">
            <div
              className="col-md-7 text-center heading-section"
              data-aos-duration="1000"
            >
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Clients We Help</h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <div className="carousel-testimony">
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url('/images/person_1.jpg')",
                          }}
                        ></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url('/images/person_2.jpg')",
                          }}
                        ></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url('/images/person_3.jpg')",
                          }}
                        ></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url('/images/person_1.jpg')",
                          }}
                        ></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-quote-left" />
                    </div>
                    <div className="text">
                      <p className="mb-4 msg">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{
                            backgroundImage: "url('/images/person_2.jpg')",
                          }}
                        ></div>
                        <div className="pl-3 tx">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default about;
