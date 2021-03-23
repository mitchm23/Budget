function Nav(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
        <div className="navbar-brand"><strong>Mitchell</strong></div>
            <span className="navbar-toggler-icon"></span>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                    <a className="nav-link" href="#/Home">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/Contact">Contact Me</a>
                </li>
                
            </ul>
        </div>
    </nav>
    )
}

export default Nav