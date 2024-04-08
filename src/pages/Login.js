import './Login.css';
import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function Login(){
    const [userId, setUserId] = useState('');
    const [userPwd, setUserPwd] = useState('');
    const [userName, setUserName] = useState('');

    const onSubmit = async () => {
        const response = await fetch(`http://localhost:4000/snsUserLogin.dox?userId=${userId}&userPwd=${userPwd}`);
        const jsonData = await response.json();
        if (jsonData.result == "success") {
            sessionStorage.setItem('userId', userId); 
            sessionStorage.setItem('userName', userName); 
        } else {
            alert("로그인 실패!");
        }
    }
 
    return(
        <div className="loginContainer">
            <div className="inputContainer">
                <div>
                    <h4 className="nanumPen">DiaryLog</h4>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="사용자 아이디"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="비밀번호"
                        value={userPwd}
                        onChange={(e) => setUserPwd(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <button className="loginBtn" onClick={onSubmit}>로그인</button>
                </div>
            </div>
            <div className="signContainer">
                <div>
                    계정이 없으신가요? 
                    <Link to="/SignUp">가입하기</Link> 
                </div>
            </div>
        </div>
    )
}


export default Login;