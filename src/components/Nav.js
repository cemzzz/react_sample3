import {Link} from "react-router-dom";
import './Nav.css'
import { IoHomeOutline, IoLogoInstagram } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";



function Navbar(){
    return(
        <nav>
            <p className="nanumPen">Diary</p>
            <p className="homeIcon"><IoLogoInstagram /></p>
            <ul>
                <li><Link to="/" className="linkFont">
                    <IoHomeOutline /><span className="navText">홈</span></Link></li>
                <li><Link to="/" className="linkFont">
                    <BiAddToQueue /><span className="navText">만들기</span></Link></li>
                <li><Link to="/profile" className="linkFont">
                    <CgProfile /><span className="navText">프로필</span></Link></li>
                <li><Link to="/profile" className="linkFont">
                    <GrLogout /><span className="navText">로그아웃</span></Link></li>
            </ul>    
        </nav>
    ) 
}
export default Navbar;