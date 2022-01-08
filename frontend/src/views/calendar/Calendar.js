import AddAndCreate from "../../components/allAndCreate/AllAndCreate";
import DayCalendar from "../../components/dayCalendar/DayCalendar";

import './Calendar.scss';

const Calendar = () => {
  const days = [];
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const tasks = [
    {
      name: 'За что гнобят 1zxczxczxczxczxczxczxczxc',
      calendar: 'Work'
    },
    {
      name: 'За что гнобят 2',
      calendar: 'Work'
    },
    {
      name: 'За что гнобят 3',
      calendar: 'Work'
    },
    {
      name: 'За что гнобят 4',
      calendar: 'Work'
    }
  ];

  for (let index = 0; index < 35; index++) {
    days.push(index);
  }

  return (
    <div className="calendar main">
      <AddAndCreate className="calendar__header" />
      <div className="calendar__content main__content">
        <div className="calendar__week">
          {weekDays.map((day, index) => (
            <span className="week__item" key={index}>
              {day}
            </span>
          ))}
        </div>
        <div className="calendar__sheet">
          {days.map((day, index) => {
            return <DayCalendar day={day} key={index} tasks={tasks} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
