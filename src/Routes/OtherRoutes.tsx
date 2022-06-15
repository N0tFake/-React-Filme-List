import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/Home";

const OtherRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> } />   
            </Routes>
        </BrowserRouter>
    );
}

export default OtherRoutes;