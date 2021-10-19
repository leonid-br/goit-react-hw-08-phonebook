import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import WelcomePage from './WelcomePage';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { getContacts } from 'redux/phonebook-operation';
import { getItems, loadingGet, isLoggedInGet, getName } from 'redux/selectors';
import { fetchCurrentUser } from 'redux/auth-operations';
import { Route, Switch } from 'react-router';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);
    const name = useSelector(getName);
    const isLoading = useSelector(loadingGet);
    const isLoggedIn = useSelector(isLoggedInGet);

    useEffect(() => {
        dispatch(fetchCurrentUser());
        dispatch(getContacts());
    }, [dispatch, isLoggedIn]);

    return (
        <Container>
            {!isLoggedIn ? (
                <>
                    <Route path="/welcome">
                        <WelcomePage />
                    </Route>

                    <Route path="/register">
                        <RegisterForm />
                    </Route>

                    <Route path="/login">
                        <LoginForm />
                    </Route>
                </>
            ) : (
                <>
                    <Heading title={`Your phonebook, ${name.toUpperCase()}`} />
                    <ContactForm />

                    {contacts.length >= 2 && <Filter />}
                    {contacts.length > 0 ? <ContactList /> : <Notification />}
                </>
            )}
        </Container>
    );
};

export default App;
