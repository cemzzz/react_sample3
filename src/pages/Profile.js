import MyBoard from "../components/MyBoard";
import {useState, useEffect} from 'react';
import './Profile.css';
import { Link } from "react-router-dom";

import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { HiOutlinePaperAirplane } from "react-icons/hi";

function Profile(){
    var [userInfo, setUserInfo] = useState({username : "", follower : 0, following : 0, posts : 0, profile : "", profileImage : ""});
    
    useEffect(() => {
      async function fetchProfile() {
        try {
          const response = await fetch(`http://localhost:4000/profile.dox?userId=user1`);
          const jsonData = await response.json();
          jsonData.posts = 20;
          jsonData.profileImage = 'https://img.hankyung.com/photo/202403/01.36047379.1.jpg';
          setUserInfo(jsonData);
        } catch (error) {
          console.error("에러!");
        }
      }
      fetchProfile();
    }, []);

    const list = [
        {id: 1, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '첫 번째 게시물입니다.', userId : "마블리", cDate : "2일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 2, boardImg : "https://roout.co.kr/m/p/u/gvGpTB9/f/i/7mxAM7h6jnD.jpg", content: '두 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201912/15/07712b9e-e451-49c7-a65c-fb94b6dcda0b.jpg"},
        {id: 3, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '세 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 4, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '네 번째 게시물입니다.', userId : "마동석", cDate : "3일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 5, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '다섯 번째 게시물입니다.', userId : "마동석", cDate : "4일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 6, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '여섯 번째 게시물입니다.', userId : "마동석", cDate : "5일", profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
        {id: 7, boardImg : "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg", content: '일곱 번째 게시물입니다.', userId : "마동석", cDate : "16일",profileImg : "https://img.hankyung.com/photo/202403/01.36047379.1.jpg"},
    ] 

    const iconList = [
        {like: <FaRegHeart />, cmt : <FaRegComment />, dm: <HiOutlinePaperAirplane />}
    ];
    
    const like = [
        {likeCnt: 56},
        {likeCnt: 70},
        {likeCnt: 180},
        {likeCnt: 15},
        {likeCnt: 15},
        {likeCnt: 33},
        {likeCnt: 12},
    ]


    return(
        <div>
            <div className="container"> 
                <div className="profile">
                    <div className="profileImg">
                        <img src={userInfo.profileImage} alt="프로필 이미지" />
                        {/* <img src="../img/ma.jpg"></img> */}
                    </div>
                    <div className="profileInfo">
                        <div className="profile-header">
                            <h6><strong>사랑의마블리</strong></h6>
                            <Link to="/EditProfile">
                                <button>프로필 편집</button>
                            </Link>
                        </div>
                        <div className="profileStats">
                            <div className="statItem">
                                <div className="statValue">{userInfo.posts}</div>
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
                            <strong>동석마</strong>
                            <p>안녕하세요 마동석입니다.</p>
                        </div>
                    </div>
                </div>

                <p><strong>게시물</strong></p>
                <div className="board-grid">
                    {list.map((item, index)=>(
                        <div key={item.id}>
                            <MyBoard 
                                boardImg={item.boardImg} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Profile;