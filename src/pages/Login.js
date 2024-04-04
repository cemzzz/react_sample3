import './Login.css';
import { Link } from "react-router-dom";

function Login(){
 
    return(
        <div className="loginContainer">
            <div className="inputContainer">
                <div>
                    <h4 className="nanumPen">Diary</h4>
                </div>
                <div>
                    <input type="text" placeholder="사용자 아이디"></input>
                </div>
                <div>
                    <input type="password" placeholder="비밀번호"></input>
                </div>
                <div>
                    <button>로그인</button>
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