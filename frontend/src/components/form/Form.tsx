import React from "react";
import { useForm } from "react-hook-form";

import { Tech } from "../../../../shared/types";
import { TextInput } from "./TextInput";

interface TechFormProps {
  onSubmit: () => void;
}

export const TechForm: React.FC<TechFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Tech>();

  const postForm = async (data: Tech) => {
    const res = await await fetch(`http://localhost:3001/tech/`, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    reset();
    onSubmit();
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
    <div className="px-8 pb-8 w-96">
      <form onSubmit={handleSubmit<Tech>(postForm)}>
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
