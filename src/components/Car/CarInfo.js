import React from "react";
import './CarInfo.scss';
import Logo from "../../logo.png"


const CarInfoList = ({user}) => {
    const carInfoList=[
        {
            name:'코란도 스포츠',
            img: "https://imgauto-phinf.pstatic.net/20191126_136/auto_1574747138859CiICs_PNG/20191126144536_vf4wA0UH.png?type=f567_410",
            year:'2017',
            cooling_water: 'good',
            engine: 'good',
            temperature: 'bad',
            dpf: 'good'
        },
        {
            name:'현대 소나타(DN8)',
            img: "https://imgauto-phinf.pstatic.net/20200423_99/auto_1587608142139MxX6J_PNG/20200423111539_dcj43clj.png?type=f567_410",
            year:'2018',
            cooling_water: 'good',
            engine: 'good',
            temperature: 'good',
            dpf: 'good'
        }
    ];

    const carInfoListElement=carInfoList.map((car) => (
        <div className="car-info">
            <div className="year">{car.year}년도 구입</div>
            <div className="name">{car.name}</div>
            <div className="img"><img src={car.img} alt="코란도" /></div>
            <div className="condition-wrapper">
                <div className="condition-box">
                    <div className="condition cooling_water">
                        <div className="item">냉각수 온도</div>
                        {car.cooling_water==='good'? 
                            (<div className="value green">정상</div>):
                            (<div className="value red">점검 필요</div>)
                        }
                    </div>
                    <div className="condition engine">
                        <div className="item">엔진 상태</div>
                        {car.engine==='good'? 
                            (<div className="value green">정상</div>):
                            (<div className="value red">점검 필요</div>)
                        }
                    </div>
                    <div className="condition temperature">
                        <div className="item">촉매 온도</div>
                        {car.temperature==='good'? 
                            (<div className="value green">정상</div>):
                            (<div className="value red">점검 필요</div>)
                        }
                    </div>
                    <div className="condition dpf">
                        <div className="item">DPF</div>
                        {car.dpf==='good'? 
                            (<div className="value green">정상</div>):
                            (<div className="value red">점검 필요</div>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    ))


    return (
        <ul className="car-ul">
            {carInfoListElement}
        </ul>
    )
}

export default CarInfoList;