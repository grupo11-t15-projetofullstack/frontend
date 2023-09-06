import "react-hook-form";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { JsxElement } from "typescript";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password" | "confirmPassword" | "select";
  options?: string[];
  register: UseFormRegisterReturn<string>;
  error?: FieldError | undefined;
}
export const Input = ({ label, type, register, error, options }: IInputProps) => {
  const errorMessage = error?.message;
  return (
    <fieldset>
      <label htmlFor={type}>{label}</label>
      {type === "select" ? (
        <select {...register}>
          {options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} {...register} />
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </fieldset>
  );
};