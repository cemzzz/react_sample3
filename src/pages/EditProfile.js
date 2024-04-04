import './EditProfile.css';

function EditProfile() {
    return (
      <div className="editcontainer">
          <h4>프로필 편집</h4>
          <div className="profileRow">
              <div className="editImg">
                  <img src="../img/ma.jpg" alt="profile"></img>
              </div>
              <div className="profileInfo">
                  <strong>사랑의 마블리</strong>
                  <p>동석마</p>
              </div>
              <div className="changePhotoButton">
                  <button>사진 변경</button>
              </div>
          </div>
          <div>
              <p>소개</p>
              <textarea></textarea>
          </div>
          <div>
              <select>
                  <option>남성</option>
                  <option>여성</option>
                  <option>밝히고 싶지 않음</option>
              </select>
          </div>
          <div>
              <button>제출하기</button>
          </div>
      </div>
    );
}
export default EditProfile;