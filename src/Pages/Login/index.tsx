import { useNavigate } from 'react-router-dom';
import './styles.scss'
import { useAuth } from '../../Context/auth';

export function LoginPage() {
    const context = useAuth()

    console.log(context)

    const emailRef = useRef<HTMLInputElement | null >(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const navigate = useNavigate();

    function handleSignIn(){
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        context.SignIn(email, password)
    }

    return(
        <div className="Container-Login">
            <h2>Login</h2>
            <label>Email</label>
            <input type="email" ref={emailRef} />
            <label>Password</label>
            <input type={"password"} ref={passwordRef}/>
            <button onClick={handleSignIn}>Login</button>
            <button onClick={() => navigate('/signUp')} >Register</button>
        </div>
    );
}