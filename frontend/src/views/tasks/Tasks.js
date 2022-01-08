import Task from "../../components/task/Task";
import AddAndCreate from "../../components/allAndCreate/AllAndCreate";

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
        <div className="tasks main">
            <AddAndCreate />
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
