import React, { useState } from 'react'
import './Direct.css';
 
function Direct(){
    const members = [
        {id: 1, profileImg: "https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjZfMzQg/MDAxNTkzMTUyMjI3Mjgz.4xOVQCXKCHc49biOtvC1qEc_PCLFyj-_OhDDt8YZXNog.SkFjsUTGGYvy8aVvD6oo5RwtnBbUiEb6HP3LdzmHGzYg.JPEG.browncrystal/1.jpg?type=w800", userName: "장원영",},
        {id: 2, profileImg: "https://blog.kakaocdn.net/dn/4McwK/btq7DU7hL0F/KhkSCVXWRVfeUK3wBcNZKk/img.jpg", userName: "윈터",},
        {id: 3, profileImg: "https://cdn.hankooki.com/news/photo/202310/109277_149555_1696893215.jpg", userName: "로니콜먼",}
    ];

    const dmContents = {
        "장원영": [
            { text: "안녕하세요, 장원영입니다!", isMine: false },
            { text: "안녕하세요!", isMine: true },
        ],
        "윈터": [
            { text: "오늘 날씨가 좋네요.", isMine: false },
            { text: "정말이요! 산책하고 싶어요.", isMine: true },
        ],
        "로니콜먼": [
            { text: "오늘도 헬스장에서 운동하고 오셨어요?", isMine: false },
            { text: "네, 오늘도 열심히 운동했어요!", isMine: true },
            { text: "오늘 3대 500찍었어요", isMine: true },
            { text: "엄청 힘들었어요", isMine: true },
        ],
    };
    const [selectedMember, setSelectedMember] = useState(null);

    const [selectedDmContent, setSelectedDmContent] = useState("");

    const [selectedProfileImg, setSelectedProfileImg] = useState("");

    const handleSelectMember = (userName) => {
        const member = members.find(member => member.userName === userName);
        if (member) {
            setSelectedMember(userName);
            setSelectedDmContent(dmContents[userName]);
            setSelectedProfileImg(member.profileImg); 
        }
    };

    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (!selectedMember || !newMessage.trim()) return;
       
        console.log(`Sending message to ${selectedMember}: ${newMessage}`);
        setNewMessage(""); 
    };
    
    return(
        <div className="dm-container">
               <div className="dm-list">
                <div className="naming">
                    <h5><strong>lovely_Ma!</strong></h5>
                    <strong>메시지</strong> 
                </div>

                {members.map((member) => (
                    <div className="dm-list-item" key={member.id} onClick={() => handleSelectMember(member.userName)}>
                        <img src={member.profileImg} alt="Profile" className="dm-profile-img"/>
                        <span className="dm-user-name">{member.userName}</span>
                    </div>
                ))}

            </div>
            <div className="dm-content">
                {selectedProfileImg && (
                    <div className="profile-image-container">
                        <img src={selectedProfileImg} alt="Profile" className="selected-profile-img" />
                    </div>
                )}
                <div className="messages-container">
                    {selectedMember && dmContents[selectedMember].map((message, index) => (
                        <div key={index} className={`dm-message ${message.isMine ? 'mine' : ''}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="메시지 입력..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button onClick={handleSendMessage}>전송</button>
                </div>
            </div>
            
        </div>
    )
}
export default Direct;