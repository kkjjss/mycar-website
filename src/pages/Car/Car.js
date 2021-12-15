import React from 'react';
import { useParams } from 'react-router';
import './Car.scss';

// import { useMatch } from 'react-router-dom';

const Car = () => {
  const { id } = useParams();

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

  console.dir(id);

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
            <div>
              <div className="car obddata">
                <div className="name">차량 진단 데이터</div>
                <div className="obd">
                  <div className=" a">
                    <div className=" a-a">
                      <div className="box a-a-a">a</div>
                      <div className="box a-a-b">a</div>
                    </div>
                    <div className="box a-b">a</div>
                  </div>
                  <div className="box b">a</div>
                </div>
              </div>
              <div className="modal-button"> 견적 요청 보내기 </div>
            </div>

            <div className="car">AA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
