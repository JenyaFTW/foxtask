import './Login.scss';
import Logo from '../assets/logo_white_alt.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="login__modal">
                <img width={64} alt="Logo" src={Logo} />
                <div className="login__title">Login</div>

                <label for="username" className="login__label">Username</label>
                <input type="text" name="username" className="login__input" />

                <label for="password" className="login__label">Password</label>
                <input type="password" name="password" className="login__input" />

                <button className="login__button">Login</button>

                <div className="login__signup">Don't have an account? <Link to="/signup">Sign up</Link></div>
            </div>
        </div>
    );
};

export default Login;