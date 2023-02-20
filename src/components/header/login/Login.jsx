import { useContext, useEffect, useState } from "react";
import { ContextApp } from "../../../reducers/newsReducer";
import { LOGIN } from "../../../reducers/newsReducer";

let Login = () => {
    const { state: { users }, dispatch } = useContext(ContextApp)

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginDirty, setLoginDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [loginError, setLoginError] = useState('Login cannot be empty')
    const [passwordError, setPasswordError] = useState('Password cannot be empty')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [passwordError, loginError])

    const loginHandler = (e) => {
        setLogin(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                if (login.length == 0) {
                    setLoginDirty(true)
                } else {
                    setLoginError('')
                }
                break
            case 'password':
                if (password.length == 0) {
                    setPasswordDirty(true)
                } else {
                    setPasswordError('')
                }
                break
        }
    }

    let Login = () => {
        let user = users.find(user=>user.login==login & user.password==password)
        console.log('user',user)
        if(user){
            setLoginError('')
            dispatch({ type: LOGIN, payload: { id: user.id, login:login } })
        } else{
            setLoginError('Incorrect login or password')
            console.log('Nope')
        }
    }

    return (
        <div className='login-form-container'>
            <div className="login-form-item">
                {(loginDirty && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
                Login
                <input onChange={e => loginHandler(e)} value={login} onBlur={e => blurHandler(e)} name='login' className="login-form-input" type="text" />
            </div>
            <div className="login-form-item">
                {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                Password
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' className="login-form-input" type="password" />
            </div>
            <button disabled={!formValid} onClick={Login} className="login-form-button">Sign In</button>
        </div>
    );
}

export default Login;
