import DefaultFooter from "@/components/footer";
import { LoginForm } from "@/components/form/loginForm";
import DefaultHeader from "@/components/header";


 const LoginPage = () => {
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <DefaultHeader />

        <div className="flex-grow">
          <LoginForm />
    
          <div>
            
        </div>
        </div>

        <DefaultFooter />
      </div>
    </>
    
    )
}
export default LoginPage