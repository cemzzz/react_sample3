import MyBoard from "../components/MyBoard";
import {useState, useEffect} from 'react';
import './Profile.css';
import { Link } from "react-router-dom";

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Profile(){

    const iconList = [
        {like: <FaRegHeart />, cmt : <FaRegComment />, dm: <HiOutlinePaperAirplane />}
    ];

    //프로필 유저 정보
    const [userInfo, setUserInfo] = useState({
        userId: "",
        username: "",
        follower: 0,
        following: 0,
        posts: 0,
        profile: "",
        profileImage: ""
    });

    useEffect(() => {
        const userId = sessionStorage.getItem('userId') || localStorage.getItem('userId');
        async function fetchUserInfo() {
            try {
                const response = await fetch(`http://localhost:4000/snsUserInfo.dox?userId=${userId}`);
                const jsonData = await response.json();
                setUserInfo(jsonData);
            } catch (error) {
                console.error("프로필 정보를 불러오는데 실패했습니다:", error);
            }
        }
        fetchUserInfo();
    }, []);
    
    const [profileBoard, setProfileBoard] = useState([]);
    const userId = sessionStorage.getItem('userId') || localStorage.getItem('userId'); 

    //프로필 해당 유저 등록한 게시글 현황 (이미지로 불러오기)
    useEffect(() => {
        async function fetchProfileBoard() {
            try {
                const res = await fetch(`http://localhost:4000/snsProfileBoard.dox?userId=${userId}`);
                const jsonData = await res.json();
                setProfileBoard(jsonData);
            } catch (error) {
                console.log("에러!:", error);
            }
        }
        fetchProfileBoard();
    }, [userId]);


    return(
        <div>
            <div className="container"> 
                <div className="profile">
                    <div className="profileImg">
                        {/* <img src={userInfo.profileImage} alt="프로필 이미지" /> */}
                        <img src={userInfo.profileImage} alt="프로필 이미지" />
                    </div>
                    <div className="profileInfo">
                        <div className="profile-header">
                            <h6><strong>{userInfo.userid}</strong></h6>
                            <Link to="/EditProfile">
                                <button>프로필 편집</button>
                            </Link>
                        </div>
                        <div className="profileStats">
                            <div className="statItem">
                                <div className="statValue">{userInfo.boardCount}</div>
                                <div className="statLabel">게시물</div>
                            </div>
                            <div className="statItem">
                                <div className="statValue">{userInfo.follower}</div>
                                <div className="statLabel">팔로워</div>
                            </div>
                            <div className="statItem">
                                <div className="statValue">{userInfo.following}</div>
                                <div className="statLabel">팔로잉</div>
                            </div>
                        </div>
                        <div className="introduce">
                            <strong>{userInfo.username}</strong>
                            <p>{userInfo.profile}</p>
                        </div>
                    </div>
                </div>

                <p><strong>게시물</strong></p>
                <div className="board-grid" >
                    {profileBoard.map((item) => (
                        <MyBoard 
                            key={item.boardNo} boardImg={[`http://localhost:4000/${item.imageUrl}`]} 
                        /> 
                    ))}

                    {/* {list.map((item, index)=>(
                        <div key={item.id}>
                            <MyBoard 
                                boardImg={item.boardImg} 
                            />
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}
export default Profile;