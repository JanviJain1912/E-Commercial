import { Link } from "react-router-dom"
import { useState } from "react"

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }
    
    return (
        <div>
            <div className="wrapper">
                <header className="container">
                    <div className="header py-2">
                        <div className="grid">
                        <Link className="navbar-brand" to="/dashboard">
                            <img className="nav__logo" src="https://i.pinimg.com/736x/f7/c5/bb/f7c5bbd68fc540262d72c780eeb6480d.jpg" alt="" />
                        </Link>
                            <div className="formContainer">
                                <form className="search">
                                    <div className="form-control">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={e => setSearchQuery(e.target.value)}
                                            placeholder="Search products..."
                                        />
                                    </div>
                                    <button type="button" className="search-btn" onClick={handleSubmit} >
                                        Search
                                    </button>
                                </form>
                            </div>
                            <Link to="/cart" className="link headerCart">
                                <img className="cartImg" src="/cart.svg" alt="cart" />
                                {cartItemCount > 0 && (
                                    <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                                )}
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        
            <div className="banner">
                <div className="banner__contents">
                <h1 className="banner__title">Chic Choices Await!!</h1>
                <div className="banner__buttons">
                    <Link className="navbar-brand" to="/dashboard">
                        <button className="banner__button">Search</button>
                    </Link>
                    
                    <Link className="navbar-brand" to="/cart">
                        <button className="banner__button">My Cart</button>
                    </Link>
                </div>
                <h1 className="banner__description">
                    Explore a world of fashion at your fingertips with our diverse collection of clothing and accessories. Elevate your style and embrace the latest trends with ease.
                </h1>
                </div>
                <div className="banner--fadeBottom"></div>
            </div>
      </div>

    )
}

export { NavBar }