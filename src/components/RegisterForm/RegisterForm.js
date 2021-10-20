import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth-operations';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const initialState = { name: null, password: null, email: null };
    const [userData, setUserData] = useState(initialState);

    const handleChange = e => {
        setUserData(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(register(userData));
            console.log(userData);
            setUserData(initialState);
            // history.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <form className={style.form}>
            <div className={style.segment}>
                <h2>Registration</h2>
            </div>
            <label className={style.label}>
                Name
                <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="Ivanov Ivan"
                    // value={name}

                    className={style.input}
                />
            </label>

            <label className={style.label}>
                E-mail
                <input
                    type="text"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="ivanov@me.com"
                    // value={name}

                    className={style.input}
                />
            </label>

            <label className={style.label}>
                Password
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
            <button type="submit" onClick={handleSubmit} className={style.red}>
                <Link
                    to="/contacts"
                    className={style.link}
                    // onClick={handleSubmit}
                >
                    Register
                </Link>
            </button>
        </form>
    );
};

export default RegisterForm;
