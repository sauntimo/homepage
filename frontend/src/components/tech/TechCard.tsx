import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Tech } from "../../../../shared/types";

export const TechCard: React.FC<Tech> = ({
  title,
  description,
  website,
  logo_url,
  categories,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="card bordered shadow-lg w-full cursor-pointer"
      onClick={() => window.open(website, "_blank")}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="p-2">
        {categories.split(",").map((category) => (
          <div
            key={category}
            className={`badge badge-md ${
              category === "backend" ? "badge-accent" : "badge-secondary"
            } p-3 mx-1`}
          >
            {category}
          </div>
        ))}
      </div>
      <figure>
        <img src={logo_url} className="max-h-20 h-20 object-contain px-8" />
      </figure>
      <div className="card-body flex flex-col">
        <div>
          <h2 className="card-title capitalize">{title}</h2>
        </div>
        <div className="flex-grow">
          <p>{description}</p>
        </div>
        <div className="justify-end content-end card-actions">
          <a
            href={website}
            target="_blank"
            className={`btn btn-secondary ${active ? "" : "btn-outline"}`}
          >
            {title} Website{" "}
            <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
};
