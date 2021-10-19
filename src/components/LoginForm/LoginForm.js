import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth-operations';

const LoginForm = () => {
    const dispatch = useDispatch();

    const initialState = { email: null, password: null };
    const [userData, setUserData] = useState(initialState);

    const handleChange = e => {
        setUserData(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(login(userData));
            setUserData(initialState);
            // onClose();
            // history.push('/');
        } catch (error) {}
    };
    return (
        <>
            {' '}
            <form>
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
                    Войти
                </button>
            </form>
        </>
    );
};

export default LoginForm;
