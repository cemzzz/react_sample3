import './Modal.css'
import React from 'react';

function Modal(props) {
    if (!props.isOpen) return null; 
    /* props로 넘어온 값이 false때 아무것도 안보이기 */
    /* props로 넘어온 값이 true일때 아래 내용 출력 */
    return(
      <div className="modal-overlay">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-inner">
            {props.children} 
            <button className="modal-close-button" onClick={props.isClose}>
            <strong>닫기</strong></button>
          </div>
        </div>
      </div>
    )
}
export default Modal;