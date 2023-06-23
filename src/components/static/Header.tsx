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
            <span className="px-3.5 font-semibold text-sm ">Products</span>
          </Link>
          <Link to="/enteprice">
            <span className="px-3.5 font-semibold text-sm ">Enterprise</span>
          </Link>
          <span className="px-3.5 font-semibold text-sm ">Pricing</span>
          <span className="px-3.5 font-semibold text-sm ">Resources</span>
          <span className="px-3.5 font-semibold text-sm ">Community</span>
          <span className="px-3.5 font-semibold text-sm ">Log In</span>
          <button className="bg-blue-700 font-bold text-white">
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
