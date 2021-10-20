import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/auth-operations';
import style from './LoginForm.module.css';

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
            // history.push('/');
        } catch (error) {}
    };
    return (
        <>
            <form className={style.form}>
                <div className={style.segment}>
                    <h2>Sign up</h2>
                </div>
                <label className={style.label}>
                    <input
                        type="text"
                        name="email"
                        required
                        onChange={handleChange}
                        placeholder="Email Address"
                        // value={name}

                        className={style.input}
                    />
                </label>

                <label className={style.label}>
                    <input
                        type="text"
                        name="password"
                        required
                        onChange={handleChange}
                        placeholder="Password"
                        // value={name}

                        className={style.input}
                    />
                </label>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className={style.red}
                >
                    <Link
                        to="/contacts"
                        className={style.link}
                        // onClick={handleSubmit}
                    >
                        Log in
                    </Link>
                </button>
            </form>
        </>
    );
};

export default LoginForm;
