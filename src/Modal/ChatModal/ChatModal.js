import React, { useState } from 'react';
import Modal from 'react-modal';
import './ChatModal.scss';

Modal.setAppElement('*');

const ChatModal = ({ selectedChat, onModalClose }) => {
  // const [ submitted, setSubmitted ] = useState(false);

  // const onSubmitClick = () => {
  //     setSubmitted(true)
  // }
  return (
    <Modal
      isOpen={selectedChat}
      onRequestClose={onModalClose}
      // className="Modal"
      style={{
        content: {
          backgroundColor: '#f8f9fa',
          top: '50%',
          left: '57%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height: '600px',
          width: '330px',
          // padding: '0',
        },
      }}>
      <div className="wrap">
        <div className="header">
          <div className="name">오분카 모터스</div>
          <div className="date">2021/12/01</div>
        </div>
        <div className="chat">
          <div className="text">
            오분카모터스 님이 수리 견적서를 보냈습니다.
          </div>
          <div className="estimateBox">
            <div className="header">
              <div className="titleh">
                <div className="name">오분카모터스</div>
              </div>
              <div className="place">인천광역시 연수구 · 108km</div>
              <div className="review">만족도 98.9% · 후기 100+</div>
            </div>
            <hr></hr>
            <div className="content">
              <div className="titlec">비보험 수리 (일반 수리)</div>
              <div className="feec">
                <div className="textc">총 수리비용</div>
                <div className="numberc">33,000 원</div>
              </div>
              <div className="pricec">
                <div className="textc ">결제 금액</div>
                <div className="numberc">33,000 원</div>
              </div>
              <div className="buttonc">
                <div className="reserv b">예약 요청</div>
                <div className="chatting b">채팅 상담</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui">{/* <input className="textm"></input> */}</div>
    </Modal>
  );
};

export default ChatModal;
