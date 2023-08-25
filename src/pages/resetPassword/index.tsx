import SendEmailForm from "@/components/form/sendEmailForm";
import { NextPage } from "next";

const SendEmailResetPassword: NextPage = () => {
  return (
    <main className="body min-h-screen flex items-center justify-center">
      <SendEmailForm />
    </main>
  );
};

export default SendEmailResetPassword;
