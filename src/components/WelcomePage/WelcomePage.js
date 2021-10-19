import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LoginForm';
import { Link } from 'react-router-dom';
import { Route, Switch, useHistory } from 'react-router';

const WelcomePage = () => {
    return (
        <>
            <h2>Преветствие</h2>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>

            {/* <Route path="/register">
                <RegisterForm />
            </Route>
            <Route path="/login">
                <LoginForm />
            </Route> */}
        </>
    );
};

export default WelcomePage;
