import DefaultFooter from "@/components/footer";
import { RegisterForm } from "@/components/form/register";
import DefaultHeader from "@/components/header";
import { NextPage } from "next";

 const RegisterPage: NextPage = ()=> {
  return (

    <>
    <div className="flex flex-col min-h-screen">
    <DefaultHeader />

    <div className="flex-grow">
    <RegisterForm />

      <div>
        
    </div>
    </div>

    <DefaultFooter />
  </div>
</>
 
  );
}
export default RegisterPage