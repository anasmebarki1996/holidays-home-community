import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

const BlogPage = () => {
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
                  Blog <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Our Blog</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-3 d-flex">
              <div
                className="blog-entry justify-content-end"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_1.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
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
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
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
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
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
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_5.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_6.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_7.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <Link
                  href="blog-single"
                  className="block-20 img d-flex align-items-end"
                  style={{ backgroundImage: "url('/images/image_8.jpg')" }}
                ></Link>
                <div className="text">
                  <p className="meta">
                    <span>Admin</span> <span>Dec. 01, 2020</span>
                    <Link href="blog">3 Comments</Link>
                  </p>
                  <h3 className="heading">
                    <Link href="blog">
                      New Home Sales Picked Up in December
                    </Link>
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
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <Link href="blog">&lt;</Link>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <Link href="blog">2</Link>
                  </li>
                  <li>
                    <Link href="blog">3</Link>
                  </li>
                  <li>
                    <Link href="blog">4</Link>
                  </li>
                  <li>
                    <Link href="blog">5</Link>
                  </li>
                  <li>
                    <Link href="blog">&gt;</Link>
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

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const nextI18n = await serverSideTranslations(locale ?? "en", ["common"]);
  return {
    props: {
      ...nextI18n,
    },
  };
};

export default BlogPage;
