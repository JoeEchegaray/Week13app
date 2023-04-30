import './App.css'


export default function Navbar() {
    return (
        <>
            <nav className="Navbar">
                <a className="navHeader" href="#">Joe's Week 13 React App!</a>
                <div className="navLinkDiv" id="navbarText">
                    <ul className='navLinks'>
                        <li className="navItem">
                            <a className="navLink" href="#">Home</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" href="#">About</a>
                        </li>
                        <li className="navItem">
                            <a className="navLink" href="#">Products</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
