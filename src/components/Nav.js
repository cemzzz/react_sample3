import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import './Nav.css'
import { useState } from 'react';
import { IoHomeOutline, IoLogoInstagram } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";


function Navbar(){
    let [modal, setModal] = useState(false);

    return(
        <>
        <nav>
            <p className="nanumPen">Diary</p>
            <p className="homeIcon"><IoLogoInstagram /></p>
            <ul>
                <li><Link to="/" className="linkFont">
                    <IoHomeOutline /><span className="navText">홈</span></Link></li>
                
                <li><div className="linkFont">
                    <BiAddToQueue /><span className="navText" onClick={()=>{
                        setModal(!modal);
                        console.log(modal);
                    }} >만들기</span></div></li>
                
                <li><Link to="/profile" className="linkFont">
                    <CgProfile /><span className="navText">프로필</span></Link></li>
                
                <li><Link to="/profile" className="linkFont">
                    <GrLogout /><span className="navText">로그아웃</span></Link></li>
            </ul>    
        </nav>
        
        {
            modal == true ? <Modal /> : null 
        }
        </>
    ) 
}

export default Navbar;