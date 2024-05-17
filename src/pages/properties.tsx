import Link from "next/link";
import React from "react";

const PropertiesPage = () => {
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
                  Properties <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Properties</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
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
                        href="properties.html#v-pills-1"
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
                        href="properties.html#v-pills-2"
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
                        <form action="properties" className="search-property-1">
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
                        <form action="properties" className="search-property-1">
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
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row">
            <div
              className="col-md-3"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-1.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-2.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-3.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-4.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-5.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-6.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-7.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
            <div
              className="col-md-3"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="property-wrap">
                <Link
                  href="properties"
                  className="img img-property"
                  style={{ backgroundImage: "url('/images/work-8.jpg')" }}
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
                    <Link href="properties">Sunny Loft Property</Link>
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
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link href="properties">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link href="properties">2</Link>
                  </li>
                  <li>
                    <Link href="properties">3</Link>
                  </li>
                  <li>
                    <Link href="properties">4</Link>
                  </li>
                  <li>
                    <Link href="properties">5</Link>
                  </li>
                  <li>
                    <Link href="properties">&gt;</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
