import React from "react";
import Link from "next/link";

export default function PageTitle({
  parentClass = "page-title style-2 no-border has-bg4 py-60",
}) {
  return (
    <div className={parentClass}>
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <ul className="breadcrumbs flex items-center justify-start gap-10 mb-60">
                <li>
                  <Link href={`/`} className="flex">
                    <i className="icon-home" />
                  </Link>
                </li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Development</li>
                <li>
                  <i className="icon-arrow-right" />
                </li>
                <li>Drone Development</li>
              </ul>
              <h2 className="font-cardo fw-7">Drone Development Courses</h2>
              <p>
                 With one of our online Drone development courses, you can explore
                different areas of this in-demand field.
              </p>
              <div className="widget tags-list style3">
                <h6>Topics related to Drone Development</h6>
                <ul className="tag-list">
                  <li className="tag-list-item">
                    <a href="#">Drone Technology </a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Aviation Basics</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Drone Cinematography</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">UAV Regulations</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Drone Programming using Python</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Aerospace Engineering</a>
                  </li>
                  <li className="tag-list-item">
                    <a href="#">Drone Development</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
