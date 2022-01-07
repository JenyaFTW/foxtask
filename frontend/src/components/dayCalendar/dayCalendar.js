import "./DayCalendar.scss";

const DayCalendar = ({day, index, tasks}) => {
    return(
        <div className="day__calendar" key={index}>
            <div className="circle__num__calendar">
                <span className="num__day__calendar">{day}</span>
            </div>
            {tasks.map(({name}, index) => {
                return(
                    <div className="tasks__calendar" key={index}>
                        <div className="divider__calendar"> </div>
                        <span>{name}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default DayCalendar;