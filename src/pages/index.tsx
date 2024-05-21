import Filter from "@/components/filter.component";
import GetTouch from "@/components/get-touch.component";
import Testimonial from "@/components/testimonial.component";
import { holidayHomesList, neighborhoods } from "@/utils/data";
import Link from "next/link";
import React, { useEffect } from "react";
import nextI18nextConfig from "../../next-i18next.config";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

const HomePage = () => {
  const { t, i18n } = useTranslation();

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
                              <h2>{t("discover")}</h2>
                              <p className="mb-5">
                                Join our exclusive holiday homes community and
                                experience luxury living in Dubai. Enjoy
                                world-class amenities, stunning views, and the
                                perfect retreat for any occasion. Become a
                                member today and elevate your holiday
                                experience!
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
      <Filter />
      <section className="ftco-section">
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-md-8 heading-section text-center mb-5">
              <span className="subheading">HHC Categories</span>
              <h2 className="mb-4">Explore Our Categories &amp; Places</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row g-1 mb-1">
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="/" className="services">
                    <div className="icon">
                      <span className="flaticon-architect"></span>
                    </div>
                    <div className="text">
                      <h2>Land</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="/" className="services">
                    <div className="icon">
                      <span className="flaticon-house"></span>
                    </div>
                    <div className="text">
                      <h2>Residential</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="/" className="services">
                    <div className="icon">
                      <span className="flaticon-apartment"></span>
                    </div>
                    <div className="text">
                      <h2>Commercial</h2>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3 text-center d-flex align-items-stretch">
                  <Link href="/" className="services">
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
                <div className="col-md-12">
                  <ul className="places-list">
                    {neighborhoods.map((el, index) => (
                      <li key={index}>
                        <Link href="/">
                          {el.name} <span>{el.total} Properties</span>
                        </Link>
                      </li>
                    ))}
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
              <span className="subheading">Our Community</span>
              <h2 className="mb-4">Featured Holiday Homes</h2>
            </div>
          </div>
          <div className="row">
            {holidayHomesList.map((el, index) => (
              <div className="col-md-3" key={index}>
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
            ))}
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
                {/* <Link
                  href="https://vimeo.com/115041822"
                  className="video-icon glightbox d-flex align-items-center justify-content-center"
                >
                  <span className="ion-ios-play"></span>
                </Link> */}
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
                data-aos-delay="400"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <GetTouch />
      <Testimonial />
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
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
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
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
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
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
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
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-twitter"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-facebook"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                      >
                        <span className="fa fa-google"></span>
                      </Link>
                    </li>
                    <li className="ftco-animate">
                      <Link
                        href="/"
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
                    <Link href="/">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="/">New Home Sales Picked Up in December</Link>
                  </h3>
                  <p>
                    Join our exclusive holiday homes community and experience
                    luxury living in Dubai. Enjoy world-class amenities,
                    stunning views, and the perfect retreat for any occasion.
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
                    <Link href="/">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="/">New Home Sales Picked Up in December</Link>
                  </h3>
                  <p>
                    Join our exclusive holiday homes community and experience
                    luxury living in Dubai. Enjoy world-class amenities,
                    stunning views, and the perfect retreat for any occasion.
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
                    <Link href="/">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="/">New Home Sales Picked Up in December</Link>
                  </h3>

                  <p>
                    Join our exclusive holiday homes community and experience
                    luxury living in Dubai. Enjoy world-class amenities,
                    stunning views, and the perfect retreat for any occasion.
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
                    <Link href="/">3 Comments</Link>
                  </p>
                  <h3 className="heading mb-3">
                    <Link href="/">New Home Sales Picked Up in December</Link>
                  </h3>

                  <p>
                    Join our exclusive holiday homes community and experience
                    luxury living in Dubai. Enjoy world-class amenities,
                    stunning views, and the perfect retreat for any occasion.
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

// export const getServerSideProps: GetServerSideProps<Props> = async ({
//   locale,
// }) => {
export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const nextI18n = await serverSideTranslations(locale ?? "en", ["common"]);
  return {
    props: {
      ...nextI18n,
    },
  };
};

export default HomePage;
