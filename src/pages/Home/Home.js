import React from 'react'
import './Home.scss'
import CarInfoList from "../../components/Car/CarInfo"


const Home = () => {
    return (
        <div className="Home content-wrapper">
            <div className="CarInfo content">
                <h4 className="text">차량 상태</h4>
                <div className="car-box">
                    <CarInfoList />
                </div>
            </div>
        </div>
    )
}

export default Home