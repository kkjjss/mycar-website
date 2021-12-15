import React, { useState } from 'react';
import { useParams } from 'react-router';
import './Car.scss';
import EstimateModal from 'Modal/EstimateModal/EstimateModal';
import ChatModal from 'Modal/ChatModal/ChatModal'

// import { useMatch } from 'react-router-dom';

const Car = () => {
  const { id } = useParams();
  const [selectedEstimate, setSelectedEstimate]= useState(false);
  const [selectedChat, setSelectedChat]= useState(false);

  const onClickEstimate = () => {
    setSelectedEstimate(true);
  }

  const onClickChat = (id) => {
    setSelectedChat(id);
  }

  const onModalClose = () => {
    setSelectedEstimate(false);
    setSelectedChat(undefined);
  }

  const car = {
    id: '001',
    name: '코란도 스포츠',
    img: 'https://imgauto-phinf.pstatic.net/20191126_136/auto_1574747138859CiICs_PNG/20191126144536_vf4wA0UH.png?type=f567_410',
    year: '2017',
    cooling_water: 'good',
    engine: 'good',
    temperature: 'bad',
    dpf: 'good',
  };

  return (
    <div className="Home content-wrapper">
      <div className="CarInfo content">
        <div className="c">
          <div className="contentHeader">
            <div className="text">
              <div>차량 상태 상세 조회</div>
            </div>
          </div>
          <div className="content-grid">
            <div className="car">
              <div className="year">{car.year}년도 구입</div>
              <div className="name">{car.name}</div>
              <div className="img">
                <img src={car.img} alt={car.name} />
              </div>
              <div className="basic-info">
                <div>- [차량기본정보1]</div>
                <div>- [차량기본정보2]</div>
                <div>- [차량기본정보3]</div>
                <div>- [차량기본정보4]</div>
              </div>
            </div>
            <div className='obdwrap'>
              <div className="car obddata">
                <div className="name">차량 진단 데이터</div>
                <div className="obd">
                  <div className="a">
                    <div className=" a-a">
                      <div className={"box a-a-a" + (car.cooling_water==='good'?' good':' bad')}>
                        <div className='title'>
                          냉각수 온도
                        </div>
                      </div>
                      <div className={"box a-a-b" + (car.temperature==='good'?' good':' bad')}>
                        <div className='title'>
                          촉매 온도
                        </div></div>
                    </div>
                    <div className={"box a-b" + (car.engine==='good'?' good':' bad')}>
                      <div className='title'>
                        엔진 부하 상태
                      </div></div>
                  </div>
                  <div className={"box b" + (car.dpf==='good'?' good':' bad')}>
                    <div className='title'>
                      DPF
                    </div></div>
                </div>
              </div>
              <div className="modal-button" onClick={()=>onClickEstimate(car.id)}> 견적 요청 보내기 </div>
              <EstimateModal
                onModalClose = {onModalClose}
                selectedEstimate = {selectedEstimate} />
            </div>
            <div className="car logwrap">
                <div className="name">견적 기록</div>
                <div className='table'>
                  <table>
                    <thead>
                      <tr>
                        <th className='category'>항목</th>
                        <th className='date'>요청 일시</th>
                        <th className='company'>업체</th>
                        <th className='estimate'>견적</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr onClick={()=>onClickChat(1)}>
                        <th className='category'>엔진 오일</th>
                        <th className='date'>21/12/01</th>
                        <th className='company'>오분카</th>
                        <th className='estimate'>₩33,000</th>
                      </tr>
                      <tr onClick={()=>onClickChat(2)}>
                        <th className='category'>엔진 오일</th>
                        <th className='date'>21/12/01</th>
                        <th className='company'>블루카</th>
                        <th className='estimate'>₩36,000</th>
                      </tr>
                      <tr>
                        <th className='category'>범퍼 손상</th>
                        <th className='date'>21/11/31</th>
                        <th className='company'>매일카센타</th>
                        <th className='estimate'>-</th>
                      </tr>
                      <tr>
                        <th className='category'>배터리 교체</th>
                        <th className='date'>21/10/13</th>
                        <th className='company'>오분카</th>
                        <th className='estimate'>-</th>
                      </tr>
                    </tbody>
                  </table>
                  <ChatModal
                    onModalClose = {onModalClose}
                    selectedChat = {selectedChat} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
