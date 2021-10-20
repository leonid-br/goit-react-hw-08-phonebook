import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedInGet } from 'redux/selectors';

export default function PrivateRaute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(isLoggedInGet);
    console.log('PrivateRaute ~ isLoggedIn', isLoggedIn);

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to="/welcome" />}
        </Route>
    );
}
