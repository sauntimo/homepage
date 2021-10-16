import React from "react";
import { Tech } from "../../../shared/types";
import { useTech } from "../hooks/Tech";

const TechPage: React.FC = () => {
  const { tech, isLoading, isError } = useTech();

  if (isLoading) {
    return <p>Loading some cool tech</p>;
  }

  if (isError) {
    return <p>Oh no, there was no tech!</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 p-8">
      {tech.map((tech) => (
        <TechCard key={tech.title} {...tech} />
      ))}
    </div>
  );
};

export default TechPage;

const TechCard: React.FC<Tech> = ({
  title,
  description,
  website,
  logo_url,
}) => {
  return (
    <div className="card bordered shadow-2xl w-full pt-8">
      <figure>
        <img src={logo_url} className="max-h-20 object-contain" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <a href={website} target="_blank" className="btn btn-secondary">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};
