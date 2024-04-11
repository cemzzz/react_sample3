import './Login.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';

function SingUp(){
    const navigate = useNavigate ();
    const [formData, setFormData] = useState({
        userId: '',
        userPwd: '',
        userName: '',
        profile: '',
        profileImage: ''
    });
    const [userIdCheckResult, setUserIdCheckResult] = useState('');

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'userId' && value.trim() !== '') { // 빈 값 체크 추가
            try {
                const response = await fetch(`http://localhost:4000/snsUserIdCheck.dox?userId=${value}`);
                const jsonData = await response.json();
                setUserIdCheckResult({ message: jsonData.result, color: jsonData.result.includes("중복") ? 'red' : 'blue' });
            } catch (error) {
                console.error("Error:", error);
            }
        } else { // 빈 값이면 중복 결과 표시 지우기
            setUserIdCheckResult({ message: '', color: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/snsUserJoin.dox', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const jsonData = await response.json();
            alert(jsonData.result);
            navigate('/Login');
        } catch (error) {
            console.error("Error:", error);
        }
    };
 
    return(
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <div>
                        <h4 className="nanumPen">DiaryLog</h4>
                    </div>

                    <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required placeholder='아이디 입력' />
                    <div style={{ color: userIdCheckResult.color, fontWeight: 'bold' }}>{userIdCheckResult.message}</div>

                    <input type="password" id="userPwd" name="userPwd" value={formData.userPwd} onChange={handleChange} required placeholder='패스워드 입력' />
                    <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} placeholder='이름 입력' />
                    <input type="text" id="profileImage" name="profileImage" value={formData.profileImage} onChange={handleChange} placeholder='프로필 이미지 (이미지 주소 넣기)' />
                    <textarea id="profile" name="profile" value={formData.profile} onChange={handleChange} placeholder='자기를 멋지게 소개해주세요!' />

                    <div>
                        <button className="loginBtn" type="submit" >가입하기</button>
                    </div>
                </div>
                <div className="signContainer">
                    <div>
                        계정이 있으신가요? 
                        <Link to="/Login">로그인</Link> 
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SingUp;