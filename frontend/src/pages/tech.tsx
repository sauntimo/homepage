import React from "react";

import { useTech } from "../hooks/Tech";

import { TechCard } from "../components/tech/TechCard";
import { CreateTechModal } from "../components/tech/CreateTechModal";

const TechPage: React.FC = () => {
  const { tech, isLoading, isError } = useTech();

  if (isLoading) {
    return <p>Loading some cool tech...</p>;
  }

  if (isError) {
    return <p>Oh no, there was no tech!</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 p-8">
        {tech.map((tech) => (
          <TechCard key={tech.title} {...tech} />
        ))}
      </div>
      <div>
        <CreateTechModal />
      </div>
    </>
  );
};

export default TechPage;
