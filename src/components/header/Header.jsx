import './header.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';
import { LOGOUT } from '../../reducers/newsReducer';

let Header = ({ authorizedUserId, dispatch }) => {
    let Logout = () => {
        dispatch({type:LOGOUT})
    }
    return (
        <div className='header'>
            <div className='header-item'>
                <NavLink to={'/'} style={{ display: 'block' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </NavLink>
            </div>
            <div className='header-item'>
                {authorizedUserId == null ?
                    <NavLink to={'/login'} className='login-link'>
                        Sign in
                    </NavLink>
                    :
                    <NavLink to={'/'} onClick={Logout} className='login-link'>
                        Logout
                    </NavLink>
                }

            </div>
        </div>
    );
}

export default Header;