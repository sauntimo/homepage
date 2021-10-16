import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface TextInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
}

export const TextInput: React.FC<TextInputProps> = ({ label, register }) => {
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
