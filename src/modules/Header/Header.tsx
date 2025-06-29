import { CiSearch } from "react-icons/ci";
import LogoHeader from "../../assets/images/logogreen.svg";
import { NavLink } from "react-router";
import { BsCart2 } from "react-icons/bs";
import { Auth } from "./Auth";

const Header = () => {
    return (
        <div className="containers">
            <div className="pt-[25px] flex justify-between items-center">
                <NavLink to="/">
                    <img src={LogoHeader} alt="Logo" />
                </NavLink>
                <div className="flex gap-[30px] text-[16px] font-[400] items-center cursor-pointer">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/shop">Shop</NavLink>
                </div>
                <div className="flex gap-[30px] text-[16px] font-[400] items-center cursor-pointer">
                    <CiSearch size={25} />
                    <BsCart2 size={24} />
                    <div className="flex gap-[10px] items-center cursor-pointer bg-[#46A358] py-[7px] px-[15px] rounded-[5px] text-white items-center justify-center">
                        <Auth />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
