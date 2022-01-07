import { useState } from 'react';

import "./RenderTimeDo.scss";

const RenderTimeDo = ({visible}) => {

  const [isTime, setTime] = useState('1 hours');

  const getTime = () => {
    const MAX_ESTIMATE = 24;
    const arrClock = [];
    for (let index = 1; index < MAX_ESTIMATE; index++) {
      let prefClock = 'hours';
      if(visible === 'Manually' && index === 1){
        arrClock.push('0 AM')
      }
      if(visible === 'Manually'){
        if(index > 12) {
          prefClock = 'PM';
        } else {
          prefClock = 'AM';
        }
      }

      arrClock.push(`${index} ${prefClock}`);
    }
    return arrClock;
  }

  const info = {};
  if(visible === 'Manually'){
    info.explanation = 'This task will be considered as a note. You must set time manually';
    info.dayName = 'Day';
    info.columnTwo = 'From';
    info.getTime = getTime();
    info.columnThree = 'To';
    info.columnThreeRowTwo = getTime();
  } else {
    info.explanation = 'This task will be handled by algorithm basing on the deadline, priority of the task, your free time and workload';
    info.dayName = 'Deadline';
    info.columnTwo = 'Estimate time';
    info.getTime = getTime();
    info.columnThree = 'Priority';
    info.columnThreeRowTwo = ['No Priority', 'Low Priority', 'Medium Priority', 'High Priority'];
  }



  return(
    <div className="manager__timer__modal">
      <span className="info__explanation__modal">{info.explanation}</span>
      <div className="time__do__modal">
          <div className="day__or__deadline colum__time__do__modal">
              <label>{info.dayName}</label>
              <input className="select__btn__modal" type="date"></input>
          </div>
          <div className="colum__time__do__modal">
              <label>{info.columnTwo}</label>
              <select value={isTime} onChange={(e) => setTime(e.target.value)} className="select__btn__modal">
                {info.getTime.map((clock, index) => {
                  return(
                    <option key={index}>{clock}</option>
                  )
                })}
              </select>
          </div>
          <div className="colum__time__do__modal">
              <label>{info.columnThree}</label>
              <select className="select__btn__modal">
                {info.columnThreeRowTwo.map((clock, index) => {
                  return(
                      <option key={index}>{clock}</option>
                  )
                })}
                </select>
          </div>
      </div>
    </div>
  )
}

export default RenderTimeDo;