import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import './Nav.css'
import { useState } from 'react';
import { IoHomeOutline, IoLogoInstagram } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { FaRegCompass } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";


function Navbar(){
    let [modal, setModal] = useState(false);

    return(
        <>
        <nav>
            <p className="nanumPen">DiaryLog</p>
            <p className="homeIcon"><IoLogoInstagram /></p>
            <ul>
                <li><Link to="/" className="linkFont">
                    <IoHomeOutline /><span className="navText">홈</span></Link></li>
                
                <li><div className="linkFont">
                    <BiAddToQueue /><span className="navText" onClick={()=>{
                        setModal(!modal);
                    }} >만들기</span></div></li>

                <li><Link to="/profile" className="linkFont">
                    <FaRegCompass /><span className="navText">탐색 탭</span></Link></li>    

                <li><Link to="/profile" className="linkFont">
                    <HiOutlinePaperAirplane /><span className="navText">메시지</span></Link></li>    
                
                <li><Link to="/profile" className="linkFont">
                    <CgProfile /><span className="navText">프로필</span></Link></li>
                
                <li><Link to="/profile" className="linkFont">
                    <GrLogout /><span className="navText">로그아웃</span></Link></li>
            </ul>    
        </nav>
        
        <div className="modalArea">
            <Modal isOpen={modal} isClose={()=>setModal(false)}> 
                <div className="form-group">
                    <p><strong>새 게시물 등록</strong></p>
                    <textarea></textarea>
                </div>
                <div className="form-group">
                    <button className="insertBtn">게시물 등록</button>
                </div>
            </Modal>
        </div>
        </>
    ) 
}

export default Navbar;