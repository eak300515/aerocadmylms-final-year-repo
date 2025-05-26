import React from "react";
import MyCourses from "../course-single/MyCourses";
import Reviews from "../course-single/Reviews";
import Replay from "../course-single/Replay";
import Image from "next/image";
export default function InstractorSingle() {
  return (
    <div className="tf-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="instructor-single-inner">
            <div className="instructor-about">
              <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
                About Me
              </h2>
              <p className="text-1 fs-15">
                I'm Theresa Webb, a professional drone course developer with a
                passion for combining cutting-edge aerial technology with
                hands-on, accessible education. With over 7 years of experience
                in the UAV (Unmanned Aerial Vehicle) industry, I specialize in
                creating comprehensive learning paths that empower individuals
                and organizations to safely and effectively operate drones
                across various sectors — from agriculture and filmmaking to
                surveying and emergency response.
              </p>
              <p className="text-2 fs-15">
                My mission is to bridge the gap between innovation and skill by
                developing courses that are practical, regulatory-compliant, and
                tailored to real-world applications. Whether you're a beginner
                or a professional looking to expand your drone capabilities, my
                courses are designed to help you master both the technical and
                strategic aspects of drone operations.
              </p>
            </div>
            <div className="instructor-my-course">
              <MyCourses />
            </div>
            <div className="instructor-review-wrap review-wrap">
              <Reviews />
            </div>
            <div className="instructor-add-review add-review-wrap">
              <Replay />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar-instructor">
            <div className="instructor-img">
              <Image
                className="ls-is-cached lazyloaded"
                data-src="/images/section/instructor4.webp"
                alt=""
                src="/images/section/instructor4.webp"
                width={520}
                height={521}
              />
            </div>
            <div className="sidebar-instructor-content">
              <h5 className="fw-5">Contact Me</h5>
              <ul>
                <li>
                  <i className="flaticon-location" />
                  <a className="fs-15" href="#">
                    Galgotias University, Gautam Buddh Nagar
                  </a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-mail-1" />
                  <a href="mailto:info@upskill.com">twebb@aerocadmy.com</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-call" />
                  <a href="tel:+890762205">+91 9773880076</a>
                </li>
                <li className="item-contact">
                  <i className="flaticon-programming" />
                  <a href="#">www.alitfn.com</a>
                </li>
              </ul>
            </div>
            <div className="instructor-social">
              <h6 className="fw-5">Follow me</h6>
              <ul>
                <li>
                  <a href="#">
                    {" "}
                    <i className="flaticon-facebook-1" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="flaticon-instagram" />
                  </a>
                </li>
                <li className="course-social-item">
                  <a href="#">
                    <i className="flaticon-linkedin-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
