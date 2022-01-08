import { useState, useEffect } from 'react';

import "./RenderTimeDo.scss";

const RenderTimeDo = ({visible, isForm, setForm}) => {

  const [info, setinfo] = useState(null);
  console.log(isForm);
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

  useEffect(() => {
    if(visible === 'Manually'){
      setinfo({
        explanation: 'This task will be considered as a note. You must set time manually',
        dayName: 'Day',
        columnTwo: 'From',
        getTime: getTime(),
        columnThree: 'To',
        columnThreeRowTwo: getTime(),
      });

    } else {
      setinfo({
        explanation: 'This task will be handled by algorithm basing on the deadline, priority of the task, your free time and workload',
        dayName: 'Deadline',
        columnTwo: 'Estimate time',
        getTime: getTime(),
        columnThree: 'Priority',
        columnThreeRowTwo: ['No Priority', 'Low Priority', 'Medium Priority', 'High Priority'],
      })
    }
  }, [visible]);



  return(
    <div className="manager__timer__modal">
      <span className="info__explanation__modal">{info ? info.explanation : ''}</span>
      <div className="time__do__modal">
          <div className="day__or__deadline colum__time__do__modal">
              <label>{info ? info.dayName : ''}</label>
              <input value={isForm ? isForm.day : ''} onChange={(e) => setForm({...isForm, day: e.target.value})} className="select__btn__modal" type="date"></input>
          </div>
          <div className="colum__time__do__modal">
              <label>{info ? info.columnTwo : ''}</label>
              <select value={isForm ? isForm.timeFrom : ''} onChange={(e) => setForm({...isForm, timeFrom: e.target.value})} className="select__btn__modal">
                {info ? info.getTime.map((clock, index) => {
                  return(
                    <option key={index}>{clock}</option>
                  )
                }) : ''}
              </select>
          </div>
          <div className="colum__time__do__modal">
              <label>{info ? info.columnThree : ''}</label>
              <select value={isForm ? isForm.priorityTo : ''} onChange={(e) => setForm({...isForm, priorityTo: e.target.value})} className="select__btn__modal">
                {info ? info.columnThreeRowTwo.map((clock, index) => {
                  return(
                      <option key={index}>{clock}</option>
                  )
                }) : ''}
                </select>
          </div>
      </div>
    </div>
  )
}

export default RenderTimeDo;