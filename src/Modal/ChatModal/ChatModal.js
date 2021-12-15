import React, { useState } from 'react'
import Modal from 'react-modal'
import './ChatModal.scss'

Modal.setAppElement('*');

const ChatModal = ({selectedChat, onModalClose}) => {
    // const [ submitted, setSubmitted ] = useState(false);

    // const onSubmitClick = () => {
    //     setSubmitted(true)
    // }
    return <Modal
        isOpen={selectedChat}
        onRequestClose={onModalClose}
        style={{
            content: {
                backgroundColor: '#f8f9fa',
                top: '50%',
                left: '57%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                height: '500px',
                width: '300px',
            },
        }}
    >
        <div className='wrap'>
            <div className='header'>
                <div className='name'>
                    오분카 모터스
                </div>
                <div className='date'>
                    2021/12/01
                </div>
            </div>
            <div className='chat'>
                <div className='text'>
                    오분카모터스 님이 수리 견적서를 보냈습니다.
                </div>
            </div>
        </div>
    </Modal>
}

export default ChatModal;