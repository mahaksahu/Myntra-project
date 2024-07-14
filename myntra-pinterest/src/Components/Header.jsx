
import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Header = () => {
    return (
      <header className="header">
        <nav className='flex text-sm font-bold text-gray-900 items-center p-2 shadow-md h-25'>
          <Link to="/">
            <img
              className='w-15 h-12 m-4 ml-10'
              src= "myntra_logo.webp"
              alt="Myntra Home"
            />
          </Link>
          <a href="#" className='m-3 text-transform: uppercase'>Men</a>
          <a href="#" className='m-3 text-transform: uppercase'>Women</a>
          <a href="#" className='m-3 text-transform: uppercase'>Kids</a>
          <a href="#" className='m-3  text-transform: uppercase'>Home & Living</a>
          <a href="#" className='m-3  text-transform: uppercase'>Beauty</a>
          <Link to="/Pinterest">
          <a className='m-3  text-transform: uppercase'>
            Pinterest <sup>New</sup>
          </a>
          </Link>
         <div className="border border-gray-100 flex items-center w-96 h-10 ml-5">
          <img src="search.png" alt="search" className='w-3 h-3 ml-4 '/>
          <input
            className="bg-gray-50 text-gray-700 outline-none text-sm rounded-sm block w-full p-2.5 ml-4"
            placeholder="Search for products"
          />
        </div>
        <div className="ml-6 text-xs">
        <img src="account.jpeg" alt="account" className="w-5 h-5 ml-3"/>
        <h1 className="ml-1">Profile</h1>
        </div>
        <Link to='/Wishlist'>
        <div className="ml-5 text-xs">
        <img src="wishlist.svg" alt="wishlist" className="w-5 h-5 ml-4"/>
        <h1 className="ml-1">Wishlist </h1>
        </div>
        </Link>
        <div className="ml-4 text-xs">
        <img src="bag.png" alt="bag" className="w-5 h-5 ml-2"/>
        <h1 className="ml-2">Bag</h1>
        </div>
        </nav>
      </header>
    );
  };
  
  export default Header;