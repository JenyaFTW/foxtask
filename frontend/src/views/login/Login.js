import './Login.scss';
import { useLocation, Link } from 'react-router-dom';

const routes = [
  {
    name: 'Create account',
    path: '/signup'
  },
  {
    name: 'Log in',
    path: '/login'
  }
];

const fields = [
  {
    name: 'Username',
    className: 'username',
    type: 'text'
  },
  {
    name: 'Password',
    className: 'password',
    type: 'password'
  }
];

const Login = () => {
  const history = useLocation();
  const checkPath = (path) => history.pathname === path;
  return (
    <div className="login__wrapper">
      <div className="login">
        <nav className="login__nav">
          {routes.map((el) => (
            <Link
              to={el.path}
              key={el.name}
              className={`login__nav__item ${
                checkPath(el.path) ? 'login__nav__item--active' : ''
              }`}>
              <span>{el.name}</span>
            </Link>
          ))}
        </nav>
        <form action="" className="login__form" method="get">
          {fields.map((el) => {
            return (
              <div class={`form__${el.className} login__field`}>
                <input type={el.type} name={el.type} id={el.type} required placeholder={el.name} />
              </div>
            );
          })}
          <div class="form__button">
            <input type="submit" value="Log In" />
          </div>
        </form>
        <div className="login__recover">
          <Link to="/" key="Forgot password" className="login__help__link">
            <span>Recover password</span>
          </Link>
        </div>
        <div className="login__info">
          <span>
            By pressing "Log in", I accept that I have read
            <br /> and accepted the
            <Link to="/" key="Forgot password" className="login__help__link">
              <span> User Agreement</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
