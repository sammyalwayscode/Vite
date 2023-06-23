import logo from "../../assets/figmalogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-28 bg-transparent flex justify-center items-center">
      <div className="w-11/12 flex justify-between items-center">
        <Link to="/">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
        </Link>
        <div>
          <Link to="/product">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700 ">
              Products
            </span>
          </Link>
          <Link to="/enteprice">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700">
              Enterprise
            </span>
          </Link>
          <Link to="/pricing">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700">
              Pricing
            </span>
          </Link>
          <Link to="/resources">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700">
              Resources
            </span>
          </Link>
          <Link to="/community">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700">
              Community
            </span>
          </Link>
          <Link to="/login">
            <span className="px-3.5 font-semibold text-sm text-black hover:text-blue-700">
              Log In
            </span>
          </Link>
          <button className="bg-blue-700 font-bold text-white">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
