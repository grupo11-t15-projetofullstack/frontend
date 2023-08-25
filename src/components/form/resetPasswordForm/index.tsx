import { UserContext } from "@/contexts/user";
import { ResetPasswordData, resetPasswordSchema } from "@/schemas/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { resetPassword } = useContext(UserContext);

  const onFormSubmit = (formData: ResetPasswordData) => {
    resetPassword(formData, token);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <form
        className="bg-white p-8 rounded shadow-md w-full sm:w-96"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <p className="text-center text-xl mb-4">Recuperação de senha</p>
        <div>
          <label htmlFor="email">Nova senha</label>
          <div>
            <input
              type="password"
              placeholder="Sua nova senha"
              {...register("password")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Confirmação da senha</label>
          <div>
            <input
              type="password"
              placeholder="Confirmação da senha"
              {...register("passwordConfirm")}
            />
          </div>
        </div>
        <div>
          <button
            className="btnEnterLogin w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Atualizar senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
