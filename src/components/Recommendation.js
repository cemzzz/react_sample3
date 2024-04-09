import React from 'react';
import './Recommendation.css'


function Recommendation(props) {
    return (
        <div className="recommendation">
            <img src={props.profileImg} alt={props.userName} className="recommendation-profile-img" />
            <div className="recommendation-text">
                <strong className="recommendation-username">{props.userName}</strong>
                <span>회원님을 위한 추천</span>
            </div>
            <div className="recommendation-info">
                <button className="recommendation-follow-btn">팔로우</button>
            </div>
        </div>
    );
}

export default Recommendation;
