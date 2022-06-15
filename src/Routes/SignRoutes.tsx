import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";

const SignRoutes: React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/signUp" element={ <RegisterPage /> } />
        </Routes>
    </BrowserRouter>
    );
}

export default SignRoutes;