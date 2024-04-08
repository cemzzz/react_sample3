import './EditProfile.css';

function EditProfile() {
    return (
      <div className="editcontainer">
          <h5 class="editTitle"><strong>프로필 편집</strong></h5>
          <div className="profileRow">
              <div className="editImg">
                  {/* <img src="./img/ma.jpg" alt="profile"></img> */}
                  <img src="https://img.hankyung.com/photo/202403/01.36047379.1.jpg"
                   alt="프로필 이미지" />
              </div>
              <div className="profileInfo">
                  <strong>사랑의 마블리</strong>
                  <p>동석마</p>
              </div>
              <div className="imgEdit">
                  <button >사진 변경</button>
              </div>
          </div>
          <div className="myIntroduce">
              <p><strong>소개</strong></p>
              <textarea></textarea>
          </div>
          <div className="genderSelect">
              <p><strong>성별</strong></p>
              <select>
                  <option>남성</option>
                  <option>여성</option>
                  <option>밝히고 싶지 않음</option>
              </select>
          </div>
          <div className="submitBtn">
              <button>제출하기</button>
          </div>
      </div>
    );
}
export default EditProfile;