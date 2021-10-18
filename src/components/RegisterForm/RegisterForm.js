import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { register, login } from '../../redux/auth-operations';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const initialState = { name: null, password: null, email: null };
    const [userData, setUserData] = useState(initialState);

    // ====================================== login
    const initialStateLog = { email: null, password: null };
    const [userDataLog, setUserDataLog] = useState(initialStateLog);
    const handleChangeLog = e => {
        setUserDataLog(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmitLog = e => {
        e.preventDefault();
        try {
            dispatch(login(userDataLog));
            setUserData(initialStateLog);
            // onClose();
            // history.push('/');
        } catch (error) {}
    };
    // ====================================== login

    const handleChange = e => {
        setUserData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(register(userData));
            console.log(userData);
            setUserData(initialState);
            // onClose();
            // history.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <>
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        required
                        onChange={handleChange}
                        // value={name}
                        // onChange={handelChange}
                        // className={style.input}
                    />
                </label>
                <br />
                <label>
                    E-mail
                    <input
                        type="text"
                        name="email"
                        required
                        onChange={handleChange}
                        // value={name}
                        // onChange={handelChange}
                        // className={style.input}
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        type="text"
                        name="password"
                        required
                        onChange={handleChange}
                        // value={name}
                        // onChange={handelChange}
                        // className={style.input}
                    />
                </label>
                <button type="submit" onClick={handleSubmit}>
                    Зарегистрироваться
                </button>
            </form>
            <br />
            <form>
                <br />
                <label>
                    E-mail
                    <input
                        type="text"
                        name="email"
                        required
                        onChange={handleChangeLog}
                        // value={name}
                        // onChange={handelChange}
                        // className={style.input}
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        type="text"
                        name="password"
                        required
                        onChange={handleChangeLog}
                        // value={name}
                        // onChange={handelChange}
                        // className={style.input}
                    />
                </label>
                <button type="submit" onClick={handleSubmitLog}>
                    Войти
                </button>
            </form>
        </>
    );
};

export default RegisterForm;
