import Filter from "@/components/filter.component";
import { holidayHomesList } from "@/utils/data";
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
                  <Link href="/">
                    Home <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                {/* <span>
                  Holiday <i className="fa fa-chevron-right"></i>
                </span> */}
              </p>
              <h1 className="mb-0 bread">Holiday Homes</h1>
            </div>
          </div>
        </div>
      </section>
      <Filter />
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row">
            {holidayHomesList.map((el, index) => (
              <div className="col-md-3">
                <div className="property-wrap">
                  <Link
                    href={el.website}
                    className="img img-property"
                    style={{
                      backgroundImage: `url(${el.image})`,
                    }}
                    target="_blank"
                  >
                    {/* <p className="price">
                    <span className="orig-price">$300,000</span>
                  </p> */}
                  </Link>
                  <div className="text">
                    {/* <div className="list-team d-flex align-items-center mb-4">
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
                  </div> */}
                    <h3>
                      <Link href="/">{el.name}</Link>
                    </h3>
                    <span className="location">
                      <i className="ion-ios-pin"></i> {el.place}
                      {/* <span className="sale">Sale</span> */}
                    </span>
                    <ul className="property_list mt-3 mb-0">
                      {/* <li>
                        <span className="flaticon-bed"></span>3
                      </li>
                      <li>
                        <span className="flaticon-bathtub"></span>2
                      </li> */}
                      <li>
                        <span className="flaticon-blueprint"></span>
                        {el.apartments} properties
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
          {/* <div className="row mt-5">
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
          </div> */}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
