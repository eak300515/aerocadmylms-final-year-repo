import React from "react";
import Image from "next/image";
export default function Process() {
  return (
    <section className="tf-spacing-1 section-top-course pt-0 page-become-teacher">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="fw-7 font-cardo wow fadeInUp">How To Begin</h2>
              <div className="sub fs-15 wow fadeInUp">
                Online video courses with new additions published every month.
              </div>
            </div>
            <div className="widget-tabs style-small type-center">
              <ul className="widget-menu-tab overflow-x-auto wow fadeInUp">
                <li className="item-title active">Plan your curriculum</li>
                <li className="item-title">Record your video</li>
                <li className="item-title">Launch your course</li>
              </ul>
              <div className="widget-content-tab">
                <div className="widget-content-inner active">
                  <div className="row items-center">
                    <div className="col-lg-6">
                      <div className="content wow fadeInUp">
                        <p className="paragraph-1">
                          At aerocadmy, we simplify the process of building
                          effective drone education programs. Whether you're
                          focusing on beginner flight skills, aerial surveying,
                          or regulatory compliance, our tools help you plan and
                          organize your curriculum with clarity and control.
                        </p>
                        <span>How we help you</span>
                        <p className="paragraph-2">
                          From an intuitive instructor dashboard to flexible
                          course modules, AeroCadmy provides everything you need
                          to launch your course. You’ll find built-in resources,
                          structured templates, and performance tracking to
                          support both you and your learners at every step.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image wow fadeInRight">
                        <Image
                          className="lazyload"
                          data-src="/images/section/instructor2.webp"
                          alt=""
                          src="/images/section/instructor2.webp"
                          width={1422}
                          height={1244}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-content-inner">
                  <div className="row items-center">
                    <div className="col-lg-6">
                      <div className="content">
                        <p className="paragraph-1">
                          At aerocadmy, we simplify the process of building
                          effective drone education programs. Whether you're
                          focusing on beginner flight skills, aerial surveying,
                          or regulatory compliance, our tools help you plan and
                          organize your curriculum with clarity and control.
                        </p>
                        <span>How we help you</span>
                        <p className="paragraph-2">
                          From an intuitive instructor dashboard to flexible
                          course modules, AeroCadmy provides everything you need
                          to launch your course. You’ll find built-in resources,
                          structured templates, and performance tracking to
                          support both you and your learners at every step.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <Image
                          className="lazyload"
                          data-src="/images/section/instructor4.webp"
                          alt=""
                          src="/images/section/instructor4.webp"
                          width={1300}
                          height={1129}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget-content-inner">
                  <div className="row items-center">
                    <div className="col-lg-6">
                      <div className="content">
                        <p className="paragraph-1">
                          At aerocadmy, we simplify the process of building
                          effective drone education programs. Whether you're
                          focusing on beginner flight skills, aerial surveying,
                          or regulatory compliance, our tools help you plan and
                          organize your curriculum with clarity and control.
                        </p>
                        <span>How we help you</span>
                        <p className="paragraph-2">
                          From an intuitive instructor dashboard to flexible
                          course modules, AeroCadmy provides everything you need
                          to launch your course. You’ll find built-in resources,
                          structured templates, and performance tracking to
                          support both you and your learners at every step.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="image">
                        <Image
                          className="lazyload"
                          data-src="/images/section/instructor3.webp"
                          alt=""
                          src="/images/section/instructor3.webp"
                          width={1148}
                          height={1149}
                        />
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
  );
}
