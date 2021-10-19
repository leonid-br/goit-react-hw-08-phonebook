import PropTypes from 'prop-types';
import style from './Heading.module.css';
import { logout } from 'redux/auth-operations';
import { useDispatch } from 'react-redux';

const Heading = ({ title }) => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        try {
            dispatch(logout());
        } catch (error) {}
    };
    return (
        <div className={style.heading}>
            <h2 className={style.title}>{title}</h2>{' '}
            <button type="submit" onClick={handleSubmit} className={style.btn}>
                Log out
            </button>
        </div>
    );
};

Heading.propTypes = { title: PropTypes.string.isRequired };

export default Heading;
