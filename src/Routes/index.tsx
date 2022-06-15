import { useAuth } from "../Context/auth";
import OtherRoutes from "./OtherRoutes";
import SignRoutes from "./SignRoutes"

const Routes: React.FC = () => {
    const { signed } = useAuth()
    console.log(signed)
    return signed ? <OtherRoutes /> : <SignRoutes />
}

export default Routes;