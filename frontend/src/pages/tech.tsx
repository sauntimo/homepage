import React, { FormEvent } from "react";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";

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
}) => {
  return (
    <div className="card bordered shadow-lg w-full pt-8">
      <figure>
        <img src={logo_url} className="max-h-20 object-contain px-8" />
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

  return (
    <div className="card bordered m-8 p-4 w-96">
      <span className="text-xl font-bold">
        Create a new item in the Tech Stack
      </span>
      <form onSubmit={handleSubmit<Tech>(onSubmit)}>
        <TextInput label="title" register={register} />
        <TextInput label="description" register={register} />
        <TextInput label="website" register={register} />
        <TextInput label="logo_url" register={register} />
        <TextInput label="stack_order" register={register} />
        <div className="form-control mt-4">
          <input type="submit" className="btn btn-primary btn-md" />
        </div>
      </form>
    </div>
  );
};
