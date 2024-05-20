import Link from "next/link";
import React from "react";

const GetTouch = () => {
  return (
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
                  <h1 className="mb-0">Grow up with us</h1>
                  <p>
                    Join us and find your ideal way to improve! At our
                    community, {"you're"} in safe hands, ensuring a comfortable
                    and secure experience
                  </p>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <p className="mb-0">
                  <Link
                    href="https://wa.me/+971568708213"
                    className="btn btn-black py-3 px-4"
                    target="_blank"
                  >
                    Get in touch
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetTouch;
