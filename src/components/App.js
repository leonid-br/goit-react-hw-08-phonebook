import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import WelcomePage from './WelcomePage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import PrivateRaute from './PrivateRoute/PrivateRoute';
import PublicRaute from './PublicRoute/PublicRoute';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/phonebook-operation';
import { getItems, isLoggedInGet, getName } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/auth-operations';
import { Route, Switch, useHistory } from 'react-router';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);
    const name = useSelector(getName);
    const isLoggedIn = useSelector(isLoggedInGet);
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(getContacts());
    }, [dispatch, isLoggedIn]);

    // useEffect(() => {
    //     history.push('/welcome');
    // }, []);

    return (
        <Container>
            {!isLoggedIn ? (
                <Switch>
                    <PublicRaute path="/welcome" exact>
                        <WelcomePage />
                    </PublicRaute>

                    <PublicRaute path="/register" restricted>
                        <RegisterForm />
                    </PublicRaute>

                    <PublicRaute path="/login" restricted>
                        <LoginForm />
                    </PublicRaute>
                </Switch>
            ) : (
                <>
                    <PrivateRaute path="/contacts">
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
                    </PrivateRaute>
                </>
            )}
        </Container>
    );
};

export default App;
