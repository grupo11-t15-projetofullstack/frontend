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
    <div>
      <p>Recuperação de senha</p>
      <form onSubmit={handleSubmit(onFormSubmit)}>
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
          <button type="submit">Atualizar senha</button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
