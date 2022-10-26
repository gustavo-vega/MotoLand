const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg mb-2 bg-success bg-opacity-50 bg-infos">
          <div className="container-fluid">
            <a className="navbar-brand fs-1 fw-bold" href="sm">MotoLand</a>
            <ul className="nav justify-content-center mx-auto">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="1">Calle</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="2">Doble Proposito</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="3">Scooter</a>
              </li>
            </ul>
          </div>
        </nav>
        </>
    )
}
export default NavBar;