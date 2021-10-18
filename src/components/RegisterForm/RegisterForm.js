import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router';
import { register } from '../../redux/auth-operations';

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
            // onClose();
            // history.push('/');
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
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
    );
};

export default RegisterForm;
