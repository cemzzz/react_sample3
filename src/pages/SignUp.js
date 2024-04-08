import './Login.css';
import { Link } from "react-router-dom";

function SingUp(){
 
    return(
        <div className="loginContainer">
            <div className="inputContainer">
                <div>
                    <h4 className="nanumPen">DiaryLog</h4>
                </div>
                <div>
                    <input type="text" placeholder="이메일 주소"></input>
                </div>
                <div>
                    <input type="text" placeholder="성명"></input>
                </div>
                <div>
                    <input type="text" placeholder="사용자 아이디"></input>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호"></input>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호 확인"></input>
                </div>
                <div>
                    <button className="loginBtn">가입하기</button>
                </div>
            </div>
            <div className="signContainer">
                <div>
                    계정이 있으신가요? 
                    <Link to="/Login">로그인</Link> 
                </div>
            </div>
        </div>
    )
}
export default SingUp;