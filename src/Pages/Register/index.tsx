import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabase";
import './styles.scss'

export function RegisterPage() {

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();

    async function handleSingUp(){
        const username = usernameRef.current!.value;
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        const confirmPassword = confirmPasswordRef.current!.value;

        console.log(username, email, password, confirmPassword)

        const {user} = await supabase.auth.signUp({
            email: email,
            password: password
        })

        console.log(user)

    }

    return (
        <>
            <button onClick={() => navigate('/')}>Voltar</button>
            <div className="Container-Register">
                <h1>Register</h1>
                <label>Username</label>
                <input type='text' ref={usernameRef}/>

                <label>Email</label>
                <input type='email' ref={emailRef} />

                <label>Senha</label>
                <input type='password' ref={passwordRef}/>
                
                <label>Confirmar senha</label>
                <input type='password' ref={confirmPasswordRef}/>

                <button onClick={handleSingUp}>Confirm</button>
            </div>
        </>
    );
}