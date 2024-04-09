import './MyBoard.css'
import React, { useState } from 'react'; 
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function MyBoard(props){
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
      setLiked(!liked); 
    };
   
    return(
        <div className="profileContainer">
            <div className="boardList">   
                <div className="board-image">
                    <img src={props.boardImg} alt="게시물 이미지" />
                </div>
            </div>
        </div>
    )
}
export default MyBoard;