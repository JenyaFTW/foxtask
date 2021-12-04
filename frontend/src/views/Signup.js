import './Login.scss';
import Logo from '../assets/logo_white_alt.svg';
import { Link } from 'react-router-dom';
import { signup } from '../redux/ducks/auth';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const Signup = () => {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const handleSignup = () => {
        const name = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        dispatch(signup({ name, email, password }));
    };

    return (
        <div className="login">
            <div className="login__modal">
                <img width={64} alt="Logo" src={Logo} />
                <div className="login__title">Signup</div>

                <label for="username" className="login__label">Username</label>
                <input type="text" ref={usernameRef} name="username" className="login__input" />

                <label for="email" className="login__label">Email</label>
                <input type="text" ref={emailRef} name="email" className="login__input" />

                <label for="password" className="login__label">Password</label>
                <input type="password" ref={passwordRef} name="password" className="login__input" />

                <button className="login__button" onClick={handleSignup}>Sign up</button>

                <div className="login__signup">Already have one? <Link to="/login">Log in</Link></div>
            </div>
        </div>
    );
};

export default Signup;