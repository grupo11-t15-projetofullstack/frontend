import { UserContext } from "@/contexts/user";
import {
  SendEmailResetPasswordData,
  sendEmailResetPasswordSchema,
} from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const SendEmailForm = () => {
  const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
    resolver: zodResolver(sendEmailResetPasswordSchema),
  });

  const { sendEmail } = useContext(UserContext);

  const onFormSubmit = (formData: SendEmailResetPasswordData) => {
    sendEmail(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div>
          <label className="text-center text-xl mb-4" htmlFor="email">
            Informe um e-mail para a recuperação de senha
          </label>
          <div>
            <input
              type="email"
              placeholder="example@.com"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <button
            className="btnEnterLogin w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendEmailForm;
