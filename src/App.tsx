import { AuthProvider } from "./Context/auth";
import Routes from "./Routes";

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
