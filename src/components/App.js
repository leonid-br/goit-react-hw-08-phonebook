import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import WelcomePage from './WelcomePage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/phonebook-operation';
import { getItems, isLoggedInGet, getName, loadingGet } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/auth-operations';
import { Switch } from 'react-router';
import { useHistory } from 'react-router';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);
    const name = useSelector(getName);
    const isLoggedIn = useSelector(isLoggedInGet);
    const history = useHistory();
    // const isLoading = useSelector(loadingGet);

    history.push('/');
    useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(getContacts());
    }, [dispatch, isLoggedIn]);

    return (
        <Container>
            {!isLoggedIn ? (
                <Switch>
                    <PublicRoute path="/" exact>
                        <WelcomePage />
                    </PublicRoute>

                    <PublicRoute path="/register" restricted>
                        <RegisterForm />
                    </PublicRoute>

                    <PublicRoute path="/login" restricted>
                        <LoginForm />
                    </PublicRoute>

                    <PrivateRoute path="/contacts" />
                </Switch>
            ) : (
                <>
                    <PrivateRoute path="/contacts">
                        <Heading
                            title={`Your phonebook, ${name.toUpperCase()}`}
                        />
                        <ContactForm />

                        {contacts.length >= 2 && <Filter />}
                        {contacts.length > 0 ? (
                            <ContactList />
                        ) : (
                            <Notification />
                        )}
                    </PrivateRoute>
                </>
            )}
        </Container>
    );
};

export default App;
