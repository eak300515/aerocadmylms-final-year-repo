import React from "react";
import Image from "next/image";
export default function About() {
  return (
    <section className="flat-about ">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="heading-content ">
              <div className="widget box-sub-tag wow fadeInUp">
                <div className="sub-tag-icon">
                  <i className="icon-flash" />
                </div>
                <div className="sub-tag-title">
                  <p>Best Quality</p>
                </div>
              </div>
              <h2 className="font-cardo wow fadeInUp">
                Aerocadmy – A Drone Education Platform, Built Specifically for
                Training Centers and Enthusiasts Dedicated to Aerial Learning
                and Drone Skill Development.
              </h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="content-right wow fadeInUp" data-wow-delay="0.1s">
              <p>
                Empowering aspiring drone pilots and professionals through
                expertly crafted courses, hands-on tutorials, and
                industry-relevant certifications — all designed to elevate your
                UAV skills from beginner to advanced.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <div className="about-item item-1 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/section/about-03.jpg"
                  alt=""
                  width={895}
                  height={520}
                  src="/images/section/about-03.jpg"
                />
              </div>
              <div className="about-item item-2 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/section/about-04.webp"
                  alt=""
                  width={893}
                  height={1100}
                  src="/images/section/about-04.webp"
                />
              </div>
              <div className="about-item item-3 wow fadeInUp">
                <Image
                  className="lazyload"
                  alt=""
                  src="/images/section/about-01.avif"
                  width="591"
                  height="680"
                />
              </div>
              <div className="about-item item-4 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/courses/course-04.webp"
                  alt=""
                  width={520}
                  height={380}
                  src="/images/courses/course-04.webp"
                />
              </div>
              <div className="about-item item-5 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/courses/course-14.jpg"
                  alt=""
                  width={681}
                  height={681}
                  src="/images/courses/course-14.jpg"
                />
              </div>
              <div className="about-item item-6 wow fadeInUp">
                <Image
                  className="lazyload"
                  data-src="/images/courses/courses-01.jpg"
                  alt=""
                  width={520}
                  height={380}
                  src="/images/courses/course-01.jpg"
                />
              </div>
              <div className="about-item item-7 wow fadeInUp">
                <p>
                  “Be open to new ideas and approaches. Develop your
                  Drone related skills.”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
