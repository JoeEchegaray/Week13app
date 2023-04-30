import './App.css'

export default function Loginform() {
    return (
        <div className="formContainer">
            <h3 className='formHeader'>Login</h3>
            <div className="loginForm">
                <div className="inputContainer">
                    <form>
                        <label className='formLabel'>
                            Username:
                            <input className='formInput' type='text' name='username'></input>
                        </label> <br />
                        <label className='formLabel'>
                            Password:
                            <input className='formInput' type='password' name='password'></input>
                        </label> <br />
                        <input className="formButton" type="submit" value="Login" />
                    </form>
                </div>
            </div >
        </div >
    )
}