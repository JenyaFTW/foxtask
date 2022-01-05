import Task from "../../components/task/Task";

import "./Tasks.scss";

const Tasks = () => {
    return(
        <div className="tasks">
            <div className="header__tasks">
                <div className="count__tasks">2 Tasks 2 All-day events</div>
                <button type="button" className="btn__create__tasks">Create Task</button>
            </div>
            <div className="all__task__singl">
                <Task name='Buy products'
                    date='Until March 3, 2022 8:00 PM'
                    type='Easy task #83'/>
                <Task name='Buy products'
                    date='Until March 3, 2022 8:00 PM'
                    type='Easy task #83'/>
                <Task name='Buy products'
                    date='Until March 3, 2022 8:00 PM'
                    type='Easy task #83'/>
                <Task name='Buy products'
                    date='Until March 3, 2022 8:00 PM'
                    type='Easy task #83'/>
            </div>
            <div className="all__task__multifunctional">
                <Task name='Buy products'
                      date='Until March 3, 2022 8:00 PM'
                      type='Multifunctional task #83'
                      subtasks={[
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        },
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        }]}/>
                <Task name='Buy products'
                      date='Until March 3, 2022 8:00 PM'
                      type='Multifunctional task #83'
                      subtasks={[
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        },
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        }]}/>
                <Task name='Buy products'
                      date='Until March 3, 2022 8:00 PM'
                      type='Multifunctional task #83'
                      subtasks={[
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        },
                        {
                            name:'Buy products',
                            date:'Until March 3, 2022 8:00 PM'
                        }]}/>
            </div>
        </div>
    )
}

export default Tasks;