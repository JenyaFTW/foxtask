import AddAndCreate from "../../components/allAndCreate/AllAndCreate";
import DayCalendar from "../../components/dayCalendar/DayCalendar";

import "./Calendar.scss";

const Calendar = () => {
  const days = [];
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const tasks = [
  {
    name: 'За что гнобят 1',
    calendar: 'Work',
  }, {
    name: 'За что гнобят 2',
    calendar: 'Work',
  },{
    name: 'За что гнобят 3',
    calendar: 'Work',
  },{
    name: 'За что гнобят 4',
    calendar: 'Work',
  },
];

  for (let index = 0; index < 35; index++) {
    days.push(index);
  }

  return (
    <div className="calendar main">
        <AddAndCreate className="create__calendar"/>
      <div className="main__content">
        <div align="center" className="week__calendar">
        {weekDays.map((day, index) => {
            return(
              <span key={index}>{day}</span>
            )
          })}
        </div>
        <div className="days__calendar">
          {days.map((day, index) => {
            return(
              <DayCalendar day={day}
                           key={index}
                           tasks={tasks}/>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
