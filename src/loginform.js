import './App.css'

export default function Loginform() {
    return (
        <div className="formContainer">
            <h3>Login</h3>
            <div>
                <div>
                    <form>
                        <label>
                            Username:
                            <input type='text' name='username'></input>
                        </label> <br />
                        <label>
                            Password:
                            <input type='password' name='password'></input>
                        </label> <br />
                        <button type="submit" id="login" className="loginBtn">Login</button>
                    </form>
                </div>
            </div >
        </div >
    )
}