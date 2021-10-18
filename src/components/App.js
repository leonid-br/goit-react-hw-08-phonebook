import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Container from './Container';
import Heading from './Heading';
import Notification from './Notification';
import RegisterForm from './RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/phonebook-operation';
import { getItems, loadingGet, isLoggedInGet } from 'redux/selectors';

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);
    // const isLoading = useSelector(loadingGet);
    const isLoggedIn = useSelector(isLoggedInGet);
    console.log('App ~ isLoggedIn', isLoggedIn);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <Container>
            {!isLoggedIn ? (
                <RegisterForm />
            ) : (
                // <h2>...Loading</h2>
                <>
                    <Heading title={'Phonebook'} />
                    <ContactForm />
                    <Heading title={'Contacts'} />
                    {contacts.length >= 2 && <Filter />}
                    {contacts.length > 0 ? <ContactList /> : <Notification />}
                </>
            )}
        </Container>
    );
};

export default App;
