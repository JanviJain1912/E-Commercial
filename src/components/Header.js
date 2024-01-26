import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://th.bing.com/th/id/OIP.s3x-GAv7ZoqKv0gskPQs7wHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="btn btn-danger" onClick={clickHandler}>Signin</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;