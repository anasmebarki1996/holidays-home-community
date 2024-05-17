import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <section className="slider-hero">
        <div className="overlay"></div>
        <div className="tns-outer" id="tns1-ow">
          <div className="tns-nav" aria-label="Carousel Pagination">
            <button
              type="button"
              data-nav="0"
              aria-controls="tns1"
              style={{}}
              aria-label="Carousel Page 1"
              className=""
              tabIndex={-1}
            ></button>
            <button
              type="button"
              data-nav="1"
              aria-controls="tns1"
              style={{}}
              aria-label="Carousel Page 2 (Current Slide)"
              className="tns-nav-active"
            ></button>
            <button
              type="button"
              data-nav="2"
              aria-controls="tns1"
              style={{}}
              aria-label="Carousel Page 3"
              className=""
              tabIndex={-1}
            ></button>
          </div>
          <div
            className="tns-liveregion tns-visually-hidden"
            aria-live="polite"
            aria-atomic="true"
          >
            slide <span className="current">3</span> of 3
          </div>
          <div id="tns1-mw" className="tns-ovh">
            <div className="tns-inner" id="tns1-iw">
              <div
                className="hero-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                id="tns1"
              >
                <div
                  className="item tns-item tns-slide-cloned"
                  aria-hidden="true"
                  tabIndex={-1}
                  style={{ width: "100%" }}
                >
                  <div className="work">
                    <div
                      className="img d-flex align-items-center js-fullheight"
                      style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
                    >
                      <div className="container-xl">
                        <div className="row justify-content-center">
                          <div className="col-md-10 col-xl-6">
                            <div className="text text-center">
                              <h2>Your Property Is Our Priority</h2>
                              <p className="mb-5">
                                A small river named Duden flows by their place
                                and supplies it with the necessary regelialia.
                                It is a paradisematic country, in which roasted
                                parts of sentences fly into your mouth.
                              </p>
                              <p>
                                <Link
                                  href="#"
                                  className="btn btn-primary px-5 py-3"
                                >
                                  Learn More{" "}
                                  <span className="ion ion-ios-arrow-round-forward"></span>
                                </Link>
                              </p>
                            </div>
                          </div>
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
      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftco-search d-flex justify-content-center">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap d-flex justify-content-center">
                    <div
                      className="nav nav-pills text-center"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <Link
                        className="nav-link active"
                        id="v-pills-1-tab"
                        data-toggle="pill"
                        href="index.html#v-pills-1"
                        role="tab"
                        aria-controls="v-pills-1"
                        aria-selected="true"
                      >
                        Buy Properties
                      </Link>
                      <Link
                        className="nav-link"
                        id="v-pills-2-tab"
                        data-toggle="pill"
                        href="index.html#v-pills-2"
                        role="tab"
                        aria-controls="v-pills-2"
                        aria-selected="false"
                      >
                        Rent Properties
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-12 tab-wrap">
                    <div className="tab-content" id="v-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-1"
                        role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab"
                      >
                        <form action="index" className="search-property-1">
                          <div className="row g-0">
                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0">
                                <label htmlFor="#">Enter Keyword</label>
                                <div className="form-field">
                                  <div className="icon">
                                    <span className="fa fa-search"></span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Keyword"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Property Type</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon">
                                      <span className="fa fa-chevron-down"></span>
                                    </div>
                                    <select
                                      name=""
                                      id=""
                                      className="form-control"
                                    >
                                      <option value="">Residential</option>
                                      <option value="">Commercial</option>
                                      <option value="">Land</option>
                                      <option value="">Industrial</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Location</label>
                                <div className="form-field">
                                  <div className="icon">
                                    <span className="ion-ios-pin"></span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Location"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon">
                                      <span className="fa fa-chevron-down"></span>
                                    </div>
                                    <select
                                      name=""
                                      id=""
                                      className="form-control"
                                    >
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input
                                    type="submit"
                                    value="Search"
                                    className="align-self-stretch form-control btn btn-primary"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="v-pills-2"
                        role="tabpanel"
                        aria-labelledby="v-pills-performance-tab"
                      >
                        <form action="index" className="search-property-1">
                          <div className="row g-0">
                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0">
                                <label htmlFor="#">Enter Keyword</label>
                                <div className="form-field">
                                  <div className="icon">
                                    <span className="fa fa-search"></span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Keyword"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Property Type</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon">
                                      <span className="fa fa-chevron-down"></span>
                                    </div>
                                    <select
                                      name=""
                                      id=""
                                      className="form-control"
                                    >
                                      <option value="">Residential</option>
                                      <option value="">Commercial</option>
                                      <option value="">Land</option>
                                      <option value="">Industrial</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Location</label>
                                <div className="form-field">
                                  <div className="icon">
                                    <span className="ion-ios-pin"></span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Location"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="#">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon">
                                      <span className="fa fa-chevron-down"></span>
                                    </div>
                                    <select
                                      name=""
                                      id=""
                                      className="form-control"
                                    >
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input
                                    type="submit"
                                    value="Search"
                                    className="align-self-stretch form-control btn btn-primary"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-5">
              <span className="subheading">Oakberry Categories</span>
              <h2 className="mb-4">Explore Our Categories &amp; Places</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row g-1 mb-1">
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="index" className="services">
                    <div className="icon">
                      <span className="flaticon-architect"></span>
                    </div>
                    <div className="text">
                      <h2>Land</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="index" className="services">
                    <div className="icon">
                      <span className="flaticon-house"></span>
                    </div>
                    <div className="text">
                      <h2>Residential</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="index" className="services">
                    <div className="icon">
                      <span className="flaticon-apartment"></span>
                    </div>
                    <div className="text">
                      <h2>Commercial</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="index" className="services">
                    <div className="icon">
                      <span className="flaticon-factory"></span>
                    </div>
                    <div className="text">
                      <h2>Industrial</h2>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <ul className="places-list">
                    <li>
                      <Link href="index">
                        New York
                        <span>200 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        London
                        <span>100 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Chicago
                        <span>120 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Illinois
                        <span>300 Properties</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" data-aos-delay="600">
                  <ul className="places-list">
                    <li>
                      <Link href="index">
                        California
                        <span>100 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Tennessee
                        <span>200 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Texas
                        <span>200 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        North Carolina
                        <span>200 Properties</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4" data-aos-delay="700">
                  <ul className="places-list">
                    <li>
                      <Link href="index">
                        Florida
                        <span>422 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Charlotte
                        <span>200 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Orlando
                        <span>200 Properties</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="index">
                        Atlanta
                        <span>200 Properties</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-5">
              <span className="subheading">Our Properties</span>
              <h2 className="mb-4">Featured Properties</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="property-wrap">
                <Link
                  href="index"
                  className="img img-property"
                  style={{
                    backgroundImage: "url('/images/work-1.jpg')",
                  }}
                >
                  <p className="price">
                    <span className="orig-price">$300,000</span>
                  </p>
                </Link>
                <div className="text">
                  <div className="list-team d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url('/images/person_1.jpg')",
                        }}
                      ></div>
                      <h3 className="ml-2">John Dorf</h3>
                    </div>
                    <span className="text-right">2 weeks ago</span>
                  </div>
                  <h3>
                    <Link href="index">Sunny Loft Property</Link>
                  </h3>
                  <span className="location">
                    <i className="ion-ios-pin"></i> New York{" "}
                    <span className="sale">Sale</span>
                  </span>
                  <ul className="property_list mt-3 mb-0">
                    <li>
                      <span className="flaticon-bed"></span>3
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>2
                    </li>
                    <li>
                      <span className="flaticon-blueprint"></span>1,878 sqft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="200">
              <div className="property-wrap">
                <Link
                  href="index"
                  className="img img-property"
                  style={{
                    backgroundImage: "url('/images/work-2.jpg')",
                  }}
                >
                  <p className="price">
                    <span className="old-price">800,000</span>
                    <span className="orig-price">
                      $3,050<small> / mo</small>
                    </span>
                  </p>
                </Link>
                <div className="text">
                  <div className="list-team d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url('/images/person_1.jpg')",
                        }}
                      ></div>
                      <h3 className="ml-2">John Dorf</h3>
                    </div>
                    <span className="text-right">2 weeks ago</span>
                  </div>
                  <h3>
                    <Link href="index">Sunny Loft Property</Link>
                  </h3>
                  <span className="location">
                    <i className="ion-ios-pin"></i> New York{" "}
                    <span className="rent">Rent</span>
                  </span>
                  <ul className="property_list mt-3 mb-0">
                    <li>
                      <span className="flaticon-bed"></span>3
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>2
                    </li>
                    <li>
                      <span className="flaticon-blueprint"></span>1,878 sqft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="300">
              <div className="property-wrap">
                <Link
                  href="index"
                  className="img img-property"
                  style={{
                    backgroundImage: "url('/images/work-2.jpg')",
                  }}
                >
                  <p className="price">
                    <span className="orig-price">$300</span>
                  </p>
                </Link>
                <div className="text">
                  <div className="list-team d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url('/images/person_1.jpg')",
                        }}
                      ></div>
                      <h3 className="ml-2">John Dorf</h3>
                    </div>
                    <span className="text-right">2 weeks ago</span>
                  </div>
                  <h3>
                    <Link href="index">Sunny Loft Property</Link>
                  </h3>
                  <span className="location">
                    <i className="ion-ios-pin"></i> New York{" "}
                    <span className="sale">Sale</span>
                  </span>
                  <ul className="property_list mt-3 mb-0">
                    <li>
                      <span className="flaticon-bed"></span>3
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>2
                    </li>
                    <li>
                      <span className="flaticon-blueprint"></span>1,878 sqft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="400">
              <div className="property-wrap">
                <Link
                  href="index"
                  className="img img-property"
                  style={{
                    backgroundImage: "url('/images/work-4.jpg')",
                  }}
                >
                  <p className="price">
                    <span className="orig-price">
                      $300<small> / mo</small>
                    </span>
                  </p>
                </Link>
                <div className="text">
                  <div className="list-team d-flex align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url('/images/person_1.jpg')",
                        }}
                      ></div>
                      <h3 className="ml-2">John Dorf</h3>
                    </div>
                    <span className="text-right">2 weeks ago</span>
                  </div>
                  <h3>
                    <Link href="index">Sunny Loft Property</Link>
                  </h3>
                  <span className="location">
                    <i className="ion-ios-pin"></i> New York{" "}
                    <span className="rent">Rent</span>
                  </span>
                  <ul className="property_list mt-3 mb-0">
                    <li>
                      <span className="flaticon-bed"></span>3
                    </li>
                    <li>
                      <span className="flaticon-bathtub"></span>2
                    </li>
                    <li>
                      <span className="flaticon-blueprint"></span>1,878 sqft
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="img vid-section"
        style={{
          backgroundImage: "url('/images/bg_4.jpg')",
        }}
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
                  href="https://vimeo.com/115041822"
                  className="video-icon glightbox d-flex align-items-center justify-content-center"
                >
                  <span className="ion-ios-play"></span>
                </Link>
              </div>
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
            <div className="col-md-8 heading-section" data-aos-delay="200">
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
                  <div className="counter-wrap" data-aos-delay="200">
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
                  <div className="counter-wrap" data-aos-delay="300">
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
                data-aos-delay="400"
              ></div>
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
                    <Link href="index" className="btn btn-black py-3 px-4">
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
            <div className="col-md-7 text-center heading-section">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Clients We Help</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-agent ftco-no-pb">
        <div className="overlay"></div>
        <div className="container-xl">
          <div className="row justify-content-center pb-5">
            <div className="col-md-10 heading-section heading-section-white">
              <span className="subheading">Meets Our Agents</span>
              <h2 className="mb-4">Our Agents</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="agent">
                <div className="img">
                  <img
                    src="images/team-1.jpg"
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
                    <Link href="properties">Mike Bochs</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="200">
              <div className="agent">
                <div className="img">
                  <img
                    src="images/team-2.jpg"
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
                    <Link href="properties">Mike Bochs</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="300">
              <div className="agent">
                <div className="img">
                  <img
                    src="images/team-3.jpg"
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
                    <Link href="properties">Jessica Moore</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-instagram"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3" data-aos-delay="400">
              <div className="agent">
                <div className="img">
                  <img
                    src="images/team-4.jpg"
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
                    <Link href="properties">Sarah Geronimo</Link>
                  </h3>
                  <ul className="ftco-social">
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="index"
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
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Our Blog</span>
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 d-flex">
              <div className="blog-entry justify-content-end">
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_1.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="index">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="index">
                      New Home Sales Picked Up in December
                    </Link>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div
                className="blog-entry justify-content-end"
                data-aos-delay="200"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_2.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="index">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="index">
                      New Home Sales Picked Up in December
                    </Link>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div
                className="blog-entry justify-content-end"
                data-aos-delay="300"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_3.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="index">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="index">
                      New Home Sales Picked Up in December
                    </Link>
                  </h3>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div
                className="blog-entry justify-content-end"
                data-aos-delay="300"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_4.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="index">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="index">
                      New Home Sales Picked Up in December
                    </Link>
                  </h3>

                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
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
            <div className="col-md-2" data-aos-delay="200">
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
            <div className="col-md-2" data-aos-delay="300">
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
            <div className="col-md-2" data-aos-delay="400">
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
            <div className="col-md-2" data-aos-delay="500">
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
            <div className="col-md-2" data-aos-delay="600">
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

export default HomePage;
