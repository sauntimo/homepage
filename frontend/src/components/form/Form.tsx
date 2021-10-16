import React from "react";
import { useForm } from "react-hook-form";

import { Tech } from "../../../../shared/types";
import { TextInput } from "./TextInput";

export const TechForm: React.FC = () => {
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

  const fields = [
    "title",
    "description",
    "website",
    "logo_url",
    "stack_order",
    "categories",
  ];

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
