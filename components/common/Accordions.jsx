import React from "react";

export default function Accordions() {
  return (
    <>
      <div className="tf-accordion-item">
        <h3 className="tf-accordion-header">
          <span
            className="tf-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            <span className="rectangle-314" />
            High-Quality Video Lessons
          </span>
        </h3>
        <div
          id="collapseOne"
          className="tf-accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              Our drone training videos are filmed in high-definition and led by certified instructors. Lessons combine real-world flying scenarios with clear theoretical explanations to ensure comprehensive learning.
            </p>
          </div>
        </div>
      </div>

      <div className="tf-accordion-item">
        <h3 className="tf-accordion-header">
          <span
            className="tf-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <span className="rectangle-314" />
            Personalized Feedback and Support
          </span>
        </h3>
        <div
          id="collapseTwo"
          className="tf-accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              Get direct feedback from drone experts on your progress and assignments. Our support team is available to guide you through technical or course-related queries at every stage.
            </p>
          </div>
        </div>
      </div>

      <div className="tf-accordion-item">
        <h3 className="tf-accordion-header">
          <span
            className="tf-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="true"
            aria-controls="collapseThree"
          >
            <span className="rectangle-314" />
            Access to Course Materials and Resources
          </span>
        </h3>
        <div
          id="collapseThree"
          className="tf-accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              Every course includes downloadable PDFs, reference guides, and practice questions to help reinforce your learning. You can access materials anytime, from any device.
            </p>
          </div>
        </div>
      </div>

      <div className="tf-accordion-item">
        <h3 className="tf-accordion-header">
          <span
            className="tf-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            <span className="rectangle-314" />
            Can I distribute this product?
          </span>
        </h3>
        <div
          id="collapseFour"
          className="tf-accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              No, all AeroCadmy content is licensed for personal use only. Redistribution, commercial use, or sharing of any material without written permission is strictly prohibited.
            </p>
          </div>
        </div>
      </div>

      <div className="tf-accordion-item">
        <h3 className="tf-accordion-header">
          <span
            className="tf-accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="true"
            aria-controls="collapseFive"
          >
            <span className="rectangle-314" />
            What is your refund policy?
          </span>
        </h3>
        <div
          id="collapseFive"
          className="tf-accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="tf-accordion-content">
            <p>
              We offer a 7-day refund policy if you're not satisfied with your course, provided less than 20% of the content has been accessed. Contact support to initiate the process.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
