"use clieent";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const loadMoreParagraph = () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");

      if (showMoreItems.length > 0) {
        showMoreItems.forEach((item) => {
          const showMoreBtn = item.querySelector(".btn-show-more-decs");
          const hideBtn = item.querySelector(".btn-hide-decs");
          const paragraph = item.querySelector(".showmore-paragraph");

          if (showMoreBtn && hideBtn && paragraph) {
            // Show more paragraph
            showMoreBtn.addEventListener("click", function () {
              paragraph.style.height = paragraph.scrollHeight + "px";
              hideBtn.style.display = "inline-block";
              showMoreBtn.style.display = "none";
            });

            // Hide paragraph
            hideBtn.addEventListener("click", function () {
              paragraph.style.height = "0px";
              showMoreBtn.style.display = "inline-block";
              hideBtn.style.display = "none";
            });
          }
        });
      }
    };

    loadMoreParagraph();

    // Cleanup event listeners when the component unmounts
    return () => {
      const showMoreItems = document.querySelectorAll(".show-more-desc-item");
      showMoreItems.forEach((item) => {
        const showMoreBtn = item.querySelector(".btn-show-more-decs");
        const hideBtn = item.querySelector(".btn-hide-decs");

        if (showMoreBtn && hideBtn) {
          showMoreBtn.removeEventListener("click", function () {});
          hideBtn.removeEventListener("click", function () {});
        }
      });
    };
  }, []);

  return (
    <>
      <h2 className="text-22 fw-5 wow fadeInUp" data-wow-delay="0s">
        About This Course
      </h2>
      <p className="fw-4 fs-15">
        Master Drone Piloting: From Basics to Certification is Aerocadmy’s
      flagship course, crafted to empower future drone professionals with the
      skills and certification needed to thrive in the UAV industry. Whether
      you're stepping into drone technology for the first time or aiming to
      sharpen your flight capabilities, this program takes you through every
      stage—from understanding drone hardware and flight dynamics to mastering
      safety protocols and government regulations. With Aerocadmy’s expert-led
      training modules, real-world simulations, and exam-ready guidance, you’ll
      be equipped to pilot drones confidently and earn your professional
      certification, opening doors in sectors like surveying, agriculture,
      filmmaking, and defense.
      </p>
      <div
        className="showmore-paragraph"
        style={{
          display: "block",
          height: "0px",
          overflow: "hidden",
          transition: "0.4s",
        }}
      >
        <p className="fw-4 fs-15">
          The curriculum is enriched with interactive simulations, live practice
          sessions, and scenario-based assessments, ensuring you gain hands-on
          experience before taking to the skies. Special emphasis is placed on
          Indian and international aviation guidelines (DGCA/FAA), airspace
          classification, and legal compliance, preparing you for official
          certification exams with confidence. Whether you're aspiring to enter
          industries like agriculture, cinematography, logistics, infrastructure
          inspection, or disaster response, this course equips you with the
          technical know-how and operational readiness to succeed. With
          Aerocadmy’s expert instructors and access to cutting-edge drone
          technology, you’ll not only fly with skill—but with purpose.
        </p>
      </div>
      <div className="more-text">
        <p className="btn-show-more-decs fw-5">
          Show More <i className="icon-arrow-bottom" />
        </p>
        <p className="btn-hide-decs fw-5 hidden">
          Hide <i className="icon-arrow-top" />
        </p>
      </div>
    </>
  );
}
