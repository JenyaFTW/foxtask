import './dayCalendar.scss';

const DayCalendar = ({ day, index, tasks }) => {
  return (
    <div className="calendar__day" key={index}>
      <div className="calendar__num">
        {/*
         * calendar__num--today добавляем только одному дню
         */}
        <span className="calendar__num--today">{day}</span>
      </div>
      {tasks.map(({ name }, index) => {
        return (
          <div className="calendar__task" key={index}>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DayCalendar;
