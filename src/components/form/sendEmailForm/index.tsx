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
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email">
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
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default SendEmailForm;
