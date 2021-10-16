import React, { useState } from "react";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Tech } from "../../../shared/types";
import { useTech } from "../hooks/Tech";

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
        <TechForm />
      </div>
    </>
  );
};

export default TechPage;

const TechCard: React.FC<Tech> = ({
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

interface TextInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
}

const TextInput: React.FC<TextInputProps> = ({ label, register }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="text"
        placeholder={label}
        {...register(label, { required: true })}
        className="input input-bordered"
      />
    </div>
  );
};

const TechForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tech>();

  const onSubmit = async (data: Tech) => {
    const res = await await fetch(`http://localhost:3001/tech/`, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
  };

  const fields = ["title", "description", "website", "logo_url", "categories"];

  return (
    <div className="card bordered m-8 p-4 w-96 shadow-lg">
      <span className="text-xl font-bold">
        Create a new item in the Tech Stack
      </span>
      <form onSubmit={handleSubmit<Tech>(onSubmit)}>
        {fields.map((field) => (
          <TextInput key={field} label={field} register={register} />
        ))}
        <div className="form-control mt-4">
          <input type="submit" className="btn btn-primary btn-md" />
        </div>
      </form>
    </div>
  );
};
