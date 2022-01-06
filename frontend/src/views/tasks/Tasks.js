import Task from "../../components/task/Task";

import "./Tasks.scss";

const Tasks = () => {
    const tasks = [
        {
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
        }, {
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
        }, {
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
        }, {
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
        },{
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
            subtasks:[{
                name:'Buy products',
                date:'Until March 3, 2022 8:00 PM'
            }, {
                name:'Buy products',
                date:'Until March 3, 2022 8:00 PM'
            }]
        },{
            name:'Buy products',
            date:'Until March 3, 2022 8:00 PM',
            type:'Easy task #83',
            subtasks:[{
                name:'Buy products',
                date:'Until March 3, 2022 8:00 PM'
            }, {
                name:'Buy products',
                date:'Until March 3, 2022 8:00 PM'
            }]
        }
    ];

    return(
        <div className="tasks">
            <div className="header__tasks">
                <div className="count__tasks">2 Tasks 2 All-day events</div>
                <button type="button" className="btn__create__tasks">Create Task</button>
            </div>
            <div className="all__tasks">
                {tasks.map(({name, date, type, subtasks}, index) => {
                    return(
                        <Task name={name}
                              date={date}
                              type={type}
                              subtasks={subtasks}
                              key={index}/>
                    )
                })}

            </div>
        </div>
    )
}

export default Tasks;
