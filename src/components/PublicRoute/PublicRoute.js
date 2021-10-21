import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedInGet } from 'redux/selectors';

export default function PublicRaute({
    children,
    restricted = false,
    ...routeProps
}) {
    const isLoggedIn = useSelector(isLoggedInGet);
    const shouldRedirect = isLoggedIn && restricted;
    console.log('isLoggedIn', isLoggedIn);

    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to="/contacts" /> : children}
        </Route>
    );
}
