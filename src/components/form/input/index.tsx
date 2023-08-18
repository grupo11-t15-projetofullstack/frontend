import "react-hook-form";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "confirmPassword" | "select";
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}

export const Input = ({ label, type, register, error }: IInputProps) => {
  const errorMessage = error?.message;
  return (
    <fieldset>
      <label htmlFor={type}>{label}</label>
      <input type={type} {...register} />
      {errorMessage && <p>{errorMessage}</p>}
    </fieldset>
  );
};
