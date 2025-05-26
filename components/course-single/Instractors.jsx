import React from "react";
import Image from "next/image";
export default function Instractors() {
  return (
    <>
      {" "}
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        Instructor
      </h2>
      <div className="instructors-item style-2">
        <div className="image-wrapper">
          <Image
            className="lazyload"
            data-src="/images/instructors/instructors-01.jpg"
            alt=""
            src="/images/instructors/instructors-01.jpg"
            width={520}
            height={521}
          />
        </div>
        <div className="entry-content">
          <h5 className="entry-title">
            <a href="#">Theresa Edin</a>
          </h5>
          <p className="short-description">Professional Drone Course Developer</p>
          <ul className="entry-meta">
            <li>
              <div className="ratings">
                <div className="number">4.9</div>
                <i className="icon-star-1" />
                <i className="icon-star-1" />
                <i className="icon-star-1" />
                <i className="icon-star-1" />
                <svg
                  width={12}
                  height={11}
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.54831 7.10382L3.58894 6.85477L3.41273 6.67416L1.16841 4.37373L4.24914 3.90314L4.51288 3.86286L4.62625 3.62134L5.99989 0.694982L7.37398 3.62182L7.48735 3.86332L7.75108 3.9036L10.8318 4.37419L8.58749 6.67462L8.41128 6.85523L8.4519 7.10428L8.98079 10.3465L6.24201 8.8325L6.00014 8.69879L5.75826 8.83247L3.01941 10.3461L3.54831 7.10382ZM11.0444 4.15626L11.0442 4.15651L11.0444 4.15626Z"
                    stroke="#131836"
                  />
                </svg>
                <div className="total">315,475 Reviews</div>
              </div>
            </li>
            <li>
              <i className="flaticon-user" />
              345 Students
            </li>
            <li>
              <i className="flaticon-play" />
              34 Course
            </li>
          </ul>
          <p className="description">
            Theresa Edin is a distinguished drone course developer renowned for
            her contributions to unmanned aerial vehicle (UAV) education. With a
            rich background in aviation technology and instructional design, she
            has been instrumental in crafting comprehensive training programs
            that cater to both novice and experienced drone enthusiasts. Her
            courses emphasize practical skills, regulatory knowledge, and
            innovative applications of drone technology across various
            industries. Theresa's commitment to excellence ensures that her
            students are well-equipped to navigate the evolving landscape of UAV
            operations with confidence and proficiency.{" "}
          </p>
          <ul className="tf-social-icon flex items-center gap-10">
            <li>
              <a href="#">
                <i className="flaticon-facebook-1" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="flaticon-linkedin-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
