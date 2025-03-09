import { Link, NavLink } from "react-router-dom";
const routes = [
    { path: "/page1", name: "page1" },
  ];


function Header(){
    return(
        <>
            <div className="container d-flex flex-column">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                    Navbar
                    </Link>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            {
                                routes.map((item)=>{
                                    return(
                                        <NavLink key={item.path} className="nav-item nav-link me-4" to={item.path}>{item.name}</NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header;