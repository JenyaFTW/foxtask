import './Login.scss';
import Logo from '../assets/logo_white_alt.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login">
            <div className="login__modal">
                <img width={64} alt="Logo" src={Logo} />
                <div className="login__title">Signup</div>

                <label for="username" className="login__label">Username</label>
                <input type="text" name="username" className="login__input" />

                <label for="email" className="login__label">Email</label>
                <input type="text" name="email" className="login__input" />

                <label for="password" className="login__label">Password</label>
                <input type="password" name="password" className="login__input" />

                <button className="login__button">Signup</button>

                <div className="login__signup">Already have one? <Link to="/login">Login</Link></div>
            </div>
        </div>
    );
};

export default Signup;