import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase";

interface AuthContextData {
    signed: boolean,
    user: object | null,
    SignIn(emailRef: string, passwordRef: string): Promise<void>,
    Logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth(){
    const context = useContext(AuthContext)
    return context
}

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<object | null>(null)

    async function Logout(){
        setUser(null);
        await supabase.auth.signOut();
    }

    return (
        <AuthContext.Provider value={{signed: Boolean(user), SignIn, user, Logout}}>
            {children}
        </AuthContext.Provider>
    );

    async function SignIn(email: string, password: string){
        const {user} = await supabase.auth.signIn({
            email: email,
            password: password,
        });
        setUser(user)
    }

}
