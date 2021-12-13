import React from 'react';
import './Home.scss';
import CarInfoList from '../../components/Car/CarInfo';

const Home = ({ user }) => {
  return (
    <div className="Home content-wrapper">
      <div className="CarInfo content">
        <h4 className="text">차량 상태 조회</h4>
        <div className="car-box">
          <CarInfoList />
        </div>
      </div>
    </div>
  );
};

export default Home;
