import Link from "next/link";
import React from "react";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticProps } from "next";

type Props = {
  // Add custom props here
};

const BlogSinglePage = () => {
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
                <span className="mr-2">
                  <Link href="/">
                    Blog <i className="fa fa-chevron-right"></i>
                  </Link>
                </span>{" "}
                <span>
                  Blog Single <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Blog Details</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 blog-single">
              <h2 className="mb-3">Far far away, behind the word mountains</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis, eius mollitia suscipit, quisquam doloremque
                distinctio perferendis et doloribus unde architecto optio
                laboriosam porro adipisci sapiente officiis nemo accusamus ad
                praesentium? Esse minima nisi et. Dolore perferendis, enim
                praesentium omnis, iste doloremque quia officia optio deserunt
                molestiae voluptates soluta architecto tempora.
              </p>
              <p>
                <img src="images/bg_1.jpg" alt={""} className="img-fluid" />
              </p>
              <p>
                Molestiae cupiditate inventore animi, maxime sapiente optio,
                illo est nemo veritatis repellat sunt doloribus nesciunt! Minima
                laborum magni reiciendis qui voluptate quisquam voluptatem
                soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi
                deleniti tenetur dolore amet fugit perspiciatis ipsa, odit.
                Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!
              </p>
              <h2 className="mb-3 mt-5">#2. Creative WordPress Themes</h2>
              <p>
                Temporibus ad error suscipit exercitationem hic molestiae totam
                obcaecati rerum, eius aut, in. Exercitationem atque quidem
                tempora maiores ex architecto voluptatum aut officia doloremque.
                Error dolore voluptas, omnis molestias odio dignissimos culpa ex
                earum nisi consequatur quos odit quasi repellat qui officiis
                reiciendis incidunt hic non? Debitis commodi aut, adipisci.
              </p>
              <p>
                <img src="images/image_3.jpg" alt={""} className="img-fluid" />
              </p>
              <p>
                Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
                reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non
                tenetur tempore, nisi culpa voluptate maiores officiis quis vel
                ab consectetur suscipit veritatis nulla quos quia aspernatur
                perferendis, libero sint. Error, velit, porro. Deserunt minus,
                quibusdam iste enim veniam, modi rem maiores.
              </p>
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  <Link href="blog-single" className="tag-cloud-link">
                    house
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    real estate
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    estate
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    commercial
                  </Link>
                </div>
              </div>
              <div className="about-author d-flex p-4 bg-light rounded">
                <div className="bio mr-5">
                  <img
                    src="images/person_1.jpg"
                    alt="Image placeholder"
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="desc">
                  <h3>George Washington</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ducimus itaque, autem necessitatibus voluptate quod mollitia
                    delectus aut, sunt placeat nam vero culpa sapiente
                    consectetur similique, inventore eos fugit cupiditate
                    numquam!
                  </p>
                </div>
              </div>
              <div className="pt-5 mt-5">
                <h3
                  className="mb-5"
                  style={{ fontSize: "28px", fontWeight: "bold" }}
                >
                  6 Comments
                </h3>
                <ul className="comment-list">
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">December 02, 2020 at 3:03pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link href="blog-single" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">December 02, 2020 at 3:03pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link href="blog-single" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                    <ul className="children">
                      <li className="comment">
                        <div className="vcard bio">
                          <img
                            src="images/person_1.jpg"
                            alt="Image placeholder"
                          />
                        </div>
                        <div className="comment-body">
                          <h3>John Doe</h3>
                          <div className="meta">
                            December 02, 2020 at 3:03pm
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur quidem laborum necessitatibus, ipsam
                            impedit vitae autem, eum officia, fugiat saepe enim
                            sapiente iste iure! Quam voluptas earum impedit
                            necessitatibus, nihil?
                          </p>
                          <p>
                            <Link href="blog-single" className="reply">
                              Reply
                            </Link>
                          </p>
                        </div>
                        <ul className="children">
                          <li className="comment">
                            <div className="vcard bio">
                              <img
                                src="images/person_1.jpg"
                                alt="Image placeholder"
                              />
                            </div>
                            <div className="comment-body">
                              <h3>John Doe</h3>
                              <div className="meta">
                                December 02, 2020 at 3:03pm
                              </div>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur quidem laborum
                                necessitatibus, ipsam impedit vitae autem, eum
                                officia, fugiat saepe enim sapiente iste iure!
                                Quam voluptas earum impedit necessitatibus,
                                nihil?
                              </p>
                              <p>
                                <Link href="blog-single" className="reply">
                                  Reply
                                </Link>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="comment">
                    <div className="vcard bio">
                      <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div className="comment-body">
                      <h3>John Doe</h3>
                      <div className="meta">December 02, 2020 at 3:03pm</div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur quidem laborum necessitatibus, ipsam
                        impedit vitae autem, eum officia, fugiat saepe enim
                        sapiente iste iure! Quam voluptas earum impedit
                        necessitatibus, nihil?
                      </p>
                      <p>
                        <Link href="blog-single" className="reply">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="comment-form-wrap pt-5">
                  <h3
                    className="mb-5"
                    style={{ fontSize: "28px", fontWeight: "bold" }}
                  >
                    Leave a comment
                  </h3>
                  <form
                    action="blog-single"
                    className="p-4 p-lg-5 comment-form"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="website">Website</label>
                          <input
                            type="url"
                            className="form-control"
                            id="website"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea
                            name=""
                            id="message"
                            cols={30}
                            rows={10}
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Post Comment"
                            className="btn py-3 px-4 btn-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar pl-md-4">
              <div className="sidebar-box bg-light rounded">
                <form action="blog-single" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box">
                <div className="categories">
                  <h3>Property Type</h3>
                  <li>
                    <Link href="blog-single">Land</Link>
                  </li>
                  <li>
                    <Link href="blog-single">Residential</Link>
                  </li>
                  <li>
                    <Link href="blog-single">Commercial</Link>
                  </li>
                  <li>
                    <Link href="blog-single">Industrial</Link>
                  </li>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Recent Blog</h3>
                <div className="block-21 mb-4 d-flex">
                  <Link
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url('/images/image_1.jpg')" }}
                    href={""}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link href="blog-single">
                        Far far away, behind the word mountains
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-user"></span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-comment"></span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <Link
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url('/images/image_2.jpg')" }}
                    href={""}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link href="blog-single">
                        Far far away, behind the word mountains
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-user"></span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-comment"></span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-21 mb-4 d-flex">
                  <Link
                    className="blog-img mr-4"
                    style={{ backgroundImage: "url('/images/image_3.jpg')" }}
                    href={""}
                  ></Link>
                  <div className="text">
                    <h3 className="heading">
                      <Link href="blog-single">
                        Far far away, behind the word mountains
                      </Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-calendar"></span> December 02,
                          2020
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-user"></span> Admin
                        </Link>
                      </div>
                      <div>
                        <Link href="blog-single">
                          <span className="fa fa-comment"></span> 19
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Tag Cloud</h3>
                <div className="tagcloud">
                  <Link href="blog-single" className="tag-cloud-link">
                    real
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    estate
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    house
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    home
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    agent
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    offoce
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    rent
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    sale
                  </Link>
                  <Link href="blog-single" className="tag-cloud-link">
                    realtors
                  </Link>
                </div>
              </div>
              <div className="sidebar-box">
                <h3>Paragraph</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus itaque, autem necessitatibus voluptate quod mollitia
                  delectus aut, sunt placeat nam vero culpa sapiente consectetur
                  similique, inventore eos fugit cupiditate numquam!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
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

export default BlogSinglePage;
