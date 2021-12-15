import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './CarInfo.scss';
import refressButton from '../../refresh33.png';

const CarInfoList = ({ user }) => {
  const navigate = useNavigate();

  const [updatedAt, setUpdatedAt] = useState();

  // const date = new Date();
  // const months = [
  //   '1월',
  //   '2월',
  //   '3월',
  //   '4월',
  //   '5월',
  //   '6월',
  //   '7월',
  //   '8월',
  //   '9월',
  //   '10월',
  //   '11월',
  //   '12월',
  // ];
  // const minutes =
  //   date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  // const seconds =
  //   date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  // const updatedAt =
  //   date.getFullYear() +
  //   '년 ' +
  //   months[date.getMonth()] +
  //   ' ' +
  //   date.getDate() +
  //   '일 ' +
  //   date.getHours() +
  //   ':' +
  //   minutes +
  //   ':' +
  //   seconds;

  const generateDateTime = () => {
    const date = new Date();
    const months = [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];
    const minutes =
      date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    const result =
      date.getFullYear() +
      '년 ' +
      months[date.getMonth()] +
      ' ' +
      date.getDate() +
      '일 ' +
      date.getHours() +
      ':' +
      minutes +
      ':' +
      seconds;
    setUpdatedAt(result);
  };

  const carList = [
    {
      id: '001',
      name: '코란도 스포츠',
      img: 'https://imgauto-phinf.pstatic.net/20191126_136/auto_1574747138859CiICs_PNG/20191126144536_vf4wA0UH.png?type=f567_410',
      year: '2017',
      cooling_water: 'good',
      engine: 'good',
      temperature: 'bad',
      dpf: 'good',
    },
    {
      id: '002',
      name: '현대 소나타(DN8)',
      img: 'https://imgauto-phinf.pstatic.net/20200423_99/auto_1587608142139MxX6J_PNG/20200423111539_dcj43clj.png?type=f567_410',
      year: '2018',
      cooling_water: 'good',
      engine: 'good',
      temperature: 'good',
      dpf: 'good',
    },
  ];

  const onclick = (id) => {
    // console.log(name);
    return navigate('/car/' + id);
  };

  const carInfoListElement = carList.map((car) => (
    <div
      className="car-info"
      key={car.name}
      onClick={() => {
        onclick(car.id);
      }}>
      <div className="year">{car.year}년도 구입</div>
      <div className="name">{car.name}</div>
      <div className="img">
        <img src={car.img} alt="코란도" />
      </div>
      <div className="condition-wrapper">
        <div className="condition-box">
          <div className="condition cooling_water">
            <div className="item">냉각수 온도</div>
            {car.cooling_water === 'good' ? (
              <div className="value green">정상</div>
            ) : (
              <div className="value red">점검 필요</div>
            )}
          </div>
          <div className="condition engine">
            <div className="item">엔진 상태</div>
            {car.engine === 'good' ? (
              <div className="value green">정상</div>
            ) : (
              <div className="value red">점검 필요</div>
            )}
          </div>
          <div className="condition temperature">
            <div className="item">촉매 온도</div>
            {car.temperature === 'good' ? (
              <div className="value green">정상</div>
            ) : (
              <div className="value red">점검 필요</div>
            )}
          </div>
          <div className="condition dpf">
            <div className="item">DPF</div>
            {car.dpf === 'good' ? (
              <div className="value green">정상</div>
            ) : (
              <div className="value red">점검 필요</div>
            )}
          </div>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    generateDateTime();
  });

  return (
    <div>
      <div className="contentHeader">
        <div className="text">
          <div>차량 상태 조회</div>
          {/* <div className="refesh" onClick={''}> */}
          <img
            src={refressButton}
            alt="refresh"
            onClick={() => {
              navigate('/');
            }}
          />
          {/* </div> */}
        </div>

        <div className="updateAt">최종 업데이트 시간: {updatedAt}</div>
      </div>
      <ul className="car-ul">
        {carInfoListElement}
        <div className="car-info add">
          차량 추가 기능은 앱에서만 이용 가능합니다
        </div>
      </ul>
    </div>
  );
};

export default CarInfoList;
