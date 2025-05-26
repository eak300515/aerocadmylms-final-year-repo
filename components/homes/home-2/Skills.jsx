import React from "react";
const tags = [
  "Drone Technology",
  "Aviation Basics",
  "Aerospace Engineering",
  "Flight Simulation",
  "Remote Sensing",
  "UAV Regulations",
  "Mission Planning",
  "Aerodynamics",
  "GIS & Mapping",
];

export default function Skills() {
  return (
    <section className="section-search-tags tf-spacing-11">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center">
              <h2 className="font-outfit wow fadeInUp" data-wow-delay="0.1s">
                Advance Your Career.&nbsp;Learn In-Demand Skills.
              </h2>
              <div className="sub fs-15 wow fadeInUp" data-wow-delay="0.2s">
                Fly high with these in demand skills like Aviation basics, Aerodynamics and Flight simulation to extend your reach beyond the sky's limits.
              </div>
            </div>
            <div
              className="tags-list style3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <ul className="tag-list">
                {tags.map((tag, index) => (
                  <li key={index} className="tag-list-item">
                    <a href="#">{tag}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
