import React, { useState } from 'react';
import './Recommendation.css'


function Recommendation(props) {
    const [isFollowing, setIsFollowing] = useState(false); 

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing); 
    }

    return (
        <div className="recommendation">
            <img src={props.profileImg} alt={props.userName} className="recommendation-profile-img" />
            <div className="recommendation-text">
                <strong className="recommendation-username">{props.userName}</strong>
                <span>{isFollowing ? '팔로잉 되었습니다!' : '회원님을 위한 추천'}</span>
            </div>
            <div className="recommendation-info">
                <button className="recommendation-follow-btn" onClick={handleFollowClick}>
                    {isFollowing ? '언팔로우' : '팔로우'}
                </button>
            </div>
        </div>
    );
}

export default Recommendation;
