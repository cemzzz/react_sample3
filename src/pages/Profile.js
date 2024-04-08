import Menu from "../components/Menu";
import {useState, useEffect} from 'react';
import './Profile.css';
import { Link } from "react-router-dom";

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
        {id: 1, title: '첫 번째 게시물', content: '첫 번째 게시물입니다.'},
        {id: 2, title: '두 번째 게시물', content: '두 번째 게시물입니다.'},
        {id: 3, title: '세 번째 게시물', content: '세 번째 게시물입니다.'},
        {id: 4, title: '네 번째 게시물', content: '네 번째 게시물입니다.'},
        {id: 5, title: '다섯 번째 게시물', content: '다섯 번째 게시물입니다.'},
        {id: 6, title: '여섯 번째 게시물', content: '여섯 번째 게시물입니다.'},
        {id: 7, title: '일곱 번째 게시물', content: '일곱 번째 게시물입니다.'},
    ];

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

                <h5><strong>게시물</strong></h5>
                <div className="row">
                    {list.map(item=>(
                        <div className="col-sm-6 col-md-4 col-lg-4" key={item.id}>
                            <Menu title={item.title} content={item.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Profile;