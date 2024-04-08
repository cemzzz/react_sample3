import './Menu.css'
import React, { useState } from 'react'; 
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function Menu(props){
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
      setLiked(!liked); 
    };

    return(
        <div className="container">
            <div className="menu">   
                <div className="postHeader">
                    <div className="boardImg">
                        <img src={props.profileImg} alt="프로필" />
                    </div>
                    <div className="userInfo">
                        <strong>{props.userId}</strong>
                        <p>{props.cDate}</p>
                    </div>
                </div>
                
                <div className="menu-image">
                    <img src={props.boardImg} alt="게시물 이미지" />
                </div>

                <div className="menu-icons">
                    {liked ? 
                        <FcLike onClick={toggleLike} className="shake-animation"/> : <FaRegHeart onClick={toggleLike} />}
                    {props.icons.cmt}
                    {props.icons.dm}
                </div>

                <span><strong>좋아요 {props.likeCnt}개</strong></span>

                <div className="boardComment">
                    <strong>{props.userId}</strong>
                    <p className="menu-content">{props.content}</p>
                </div>

                <input placeholder='댓글 달기...'></input>
                <button><strong>게시</strong></button>
            </div>
        </div>
    )
}
export default Menu;