import {Link, useLocation} from "react-router-dom";
import Modal from "../components/Modal";
import './Nav.css'
import { useState, useEffect } from 'react';
import { IoHomeOutline, IoLogoInstagram } from "react-icons/io5";
import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GrLogout } from "react-icons/gr";
import { FaRegCompass } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Navbar(){
    let location = useLocation(); 
    let [modal, setModal] = useState(false);
    const [userId, setUserId] = useState("");
    const [showModalWrite, setShowModalWrite] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);

    useEffect(() => {
        const sessionUserId = sessionStorage.getItem("userId");
        if (sessionUserId !== null || sessionUserId !== 'undefined') {
            setUserId(sessionUserId);
        }
    }, []);
    
    if (location.pathname === '/Login' || location.pathname === '/SignUp') {
        return null;
    }

    const onLogout = () => {
        if (window.confirm("정말 로그아웃할까요?")) {
            sessionStorage.clear(); 
            window.location.href = "/Login";
        } else {
            return;
        }
    }

    //게시글 등록 start
    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);

        if (files.length > 3) {
            alert('최대 3개까지 파일을 업로드할 수 있습니다!');
            e.target.value = null;
            setSelectedFiles([]);
            setPreviewImages([]);
            return;
        }
        const selectedFilesUrls = files.map(file => URL.createObjectURL(file)); // 선택한 파일들의 미리보기 생성

        setSelectedFiles(files);
        setPreviewImages(selectedFilesUrls);
    };
    const submitWrite = async () => {
        // const title = document.querySelector("#title").value;
        const content = document.querySelector("#content").value;

        try {
            const map = {};
            // map.title = title;
            map.content = content;
            map.image = selectedFiles;
            map.userId = userId;

            const now = new Date();
            const year = now.getFullYear().toString().slice(-2);
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            const timestamp = `${year}${month}${day}${hours}${minutes}${seconds}`;
            let files = [];
            for (const file of selectedFiles) {
                const fileName = `${timestamp}_${file.name}`; // 저장되는 순간의 시간(YYMMDDHHmmss)을 파일 이름과 같이 저장     
                files.push({ fileName: fileName, fileOrgName: file.name });
                const imgformData = new FormData();
                imgformData.append('file', file, fileName);
                try {
                    const response = await fetch('http://localhost:4000/upload', {
                        method: 'POST',
                        body: imgformData
                    });

                    if (!response.ok) {
                        throw new Error('이미지 업로드에 실패했습니다.');
                    }

                    await response.json();
                    //alert(responseData); // 업로드 결과 출력
                } catch (error) {
                    console.error('이미지 업로드 오류:', error.message);
                    // 오류 처리
                }
            }
            map.files = files;
            const response = await fetch(`http://localhost:4000/snsWriteBoard.dox`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(map)
            });

            await response.json();
            //console.log("업로드 map===>>>", map);
            //alert(jsonData.message);
            //navigate('/');
            setShowModalWrite(false);
            if (response.ok) {
                alert("게시글이 등록됐습니다.");
                setModal(false); 
            } else {
                alert("게시글 등록에 실패했습니다."); 
            }
        } catch (error) {
            console.error("Error:", error);
            alert("게시글 등록 중 오류가 발생했습니다.")
        }
    };
    //게시글 등록 end

    return(
        <>
        <nav>
            <p className="nanumPen">DiaryLog</p>
            <p className="homeIcon"><IoLogoInstagram /></p>
            <ul>
                <li><Link to="/" className="linkFont">
                    <IoHomeOutline /><span className="navText">홈</span></Link></li>
                
                <li><div className="linkFont">
                    <BiAddToQueue />
                    {
                        sessionStorage.getItem("userId") != null &&
                        <span className="navText" onClick={()=>{
                            setModal(!modal);
                        }} >만들기</span>
                    }
                    </div>
                </li>

                <li><Link to="/profile" className="linkFont">
                    <FaRegCompass /><span className="navText">탐색 탭</span></Link></li>    

                <li><Link to="/Direct" className="linkFont">
                    <HiOutlinePaperAirplane /><span className="navText">메시지</span></Link></li>    
                
                <li><Link to="/profile" className="linkFont">
                    <CgProfile /><span className="navText">프로필</span></Link></li>
                
                <li><Link className="linkFont" onClick={onLogout}>
                    <GrLogout /><span className="navText">로그아웃</span></Link></li>
            </ul>    
        </nav>
        
        <div className="modalArea">
            <Modal isOpen={modal} isClose={()=>setModal(false)}> 
                <div className="form-group">
                    <p><strong>새 게시물 등록</strong></p>
                    <textarea id="content"></textarea>
                </div>
                <div className="file-upload-container">
                    <div className="file-input-container">
                        <input type="file" accept="image/*" multiple onChange={handleFileUpload} />
                    </div>
                    <div className="preview-container">
                        {previewImages.map((image, index) => (
                            <img key={index} src={image} alt={`Uploaded ${index}`} className="preview-image" />
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <button className="insertBtn" onClick={submitWrite}>게시물 등록</button>
                </div>
            </Modal>
        </div>
        </>
    ) 
}

export default Navbar;