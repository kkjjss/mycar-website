import React, { useState } from 'react'
import Modal from 'react-modal'
import './EstimateModal.scss'

Modal.setAppElement('*');

const EstimateModal = ({selectedEstimate, onModalClose}) => {
    const [ submitted, setSubmitted ] = useState(false);

    const onSubmitClick = () => {
        setSubmitted(true)
    }

    return <Modal
        isOpen={selectedEstimate}
        // contentLabel='Selected Estimate'
        onRequestClose={onModalClose}
        style={{
            content: {
                top: '50%',
                left: '57%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                height: '500px',
                width: '350px',
            },
        }}
    >
        {submitted === false?
            <div className='wrap'>
                <div className='title'>
                    견적서 요청
                </div>
                <div className='context'>
                    <div className='to'>
                        <span className='company highlight'>[ 오분카 모터스 ]</span> 에게
                    </div>
                    <div className='from'>
                        회원님의 <span className='car highlight'>[ 코란도 스포츠 ]</span> 의
                    </div>
                    <div className='what'>
                        <span className='fix highlight'>[ 엔진 부하 ]</span> 에 대한
                    </div>
                    <span>견적서를 요청하시겠습니까?</span>
                    
                </div>
                <button className='submit' onClick={onSubmitClick}>견적서 요청 보내기</button>
            </div>
        :<div className='wrap'>
            <div className='title'>
                견적서 요청
            </div>
            <div className='context complete'>
                <span>요청이 완료되었습니다!</span>
            </div>
            <button className='submit' onClick={() => {onModalClose(); setSubmitted(false)}}>닫기</button>
        </div>
        }
        
    </Modal>
}

export default EstimateModal;