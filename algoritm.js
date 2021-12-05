'use strict';

// 0 - no work, 1 - work
// 7x24
const week = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0], /* ПН 0 */
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], /* ВТ 1 */
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1], /* СР 2 */
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], /* ЧТ 3 */
    [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0], /* ПТ 4 */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], /* СБ 5 */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0], /* ВТ 6 */
];


const arrTimeWork = [];

function DayTimeWork(week, arrTimeWork){
    for (let i = 0; i < week.length; i++) {

      const day = week[i],
      dayArr = [];

      let sum = 0,
      posStr = 0;

      for (let j = 0; j < day.length; j++){
        const hour = day[j];

        if (hour === 0) {
          sum = 0;
          posStr = 0;
        } else {
            sum += 1;
            if(posStr == 0) {
              posStr = j; 
            }
            if (day[j + 1] == false || j === 23 ) {
              let posArr = [];
              posArr.push(posStr, posStr + (sum - 1));
              dayArr.push({day: (i + 1), timeWork: sum, position: posArr});
            }
        }
      }
      arrTimeWork.push(dayArr);
    }
    return arrTimeWork;
}

const schedule = DayTimeWork(week, arrTimeWork);

const arrTaskSort = {
  "task": [
      {
          "id": 1,
          "name": "task1",
          "description": "some text",
          "tag": "work, study",
          "difficulty": 5, // number of hours
          "importance": 5,
          "deadline": '2015-05-07T07:05:23.000Z',
          "type": "straight",
          "id_user": 2
      },
      {
          "id": 2,
          "name": "task2",
          "description": "some text",
          "tag": "work, study",
          "difficulty": 3,
          "importance": 5,
          "deadline": '2015-05-07T07:05:23.000Z',
          "type": "straight",
          "id_user": 2
      },
      {
          "id": 3,
          "name": "task3",
          "description": "some text",
          "tag": "work, study",
          "difficulty": 1,
          "importance": 5,
          "deadline": '2015-05-07T07:05:23.000Z',
          "type": "straight",
          "id_user": 2
      },
      {
        "id": 4,
        "name": "task4",
        "description": "some text",
        "tag": "work, study",
        "difficulty": 2,
        "importance": 5,
        "deadline": '2015-05-08T07:05:23.000Z',
        "type": "straight",
        "id_user": 2
    },
      {
        "id": 5,
        "name": "task5",
        "description": "some text",
        "tag": "work, study",
        "difficulty": 1,
        "importance": 5,
        "deadline": '2015-05-07T07:05:23.000Z',
        "type": "straight",
        "id_user": 2
    }
  ],
  "subtask": [
      {
          "id": 1,
          "name": "subtask1",
          "time_spent_wanted": 2,
          "task_id": 1
      },
      {
          "id": 2,
          "name": "subtask2",
          "time_spent_wanted": 2,
          "task_id": 1
      },
      {
          "id": 3,
          "name": "subtask3",
          "time_spent_wanted": 1,
          "task_id": 1
      }
  ]
};

function algoritm(arrTaskSort, scheduleWork, week) {

  const date = new Date();

  let output = week;
  arrTaskSort['task'].forEach((currentValue, index) => {
    
    let taskSet = false;
    const time = currentValue.difficulty;
    const deadline = new Date(currentValue.deadline).getDate() - date.getDate();

    let timeFree = time;
    while(taskSet != true) {
      outer: for(let i = 0; i < deadline; i++) {
        for(let j = 0; j < scheduleWork[i].length; j++) {
          
          // 24 because it's maximum of hours
          if (timeFree > 24) {
            scheduleWork.forEach(day => {
              console.log(day);
            })
            arrTaskSort['subtask'].forEach((currentValue, index) => {
              
              let subtaskSet = false;
              const subtime = currentValue.time_spent_wanted;

              let subtimeFree = subtime;
              while(subtaskSet != true) {
                outer2: for(let i = 0; i < deadline; i++) {
                  for(let j = 0; j < scheduleWork[i].length; j++) {
                    
                    // 24 because it's maximum of hours
                    if (subtimeFree > 24) {
                      throw new Error(`There isn't time for subtask ${currentValue.name}`);                     
                    }
                    
                    if(subtimeFree == scheduleWork[i][j].timeWork) {
                      scheduleWork[i][j].timeWork -= subtime;
                      subtaskSet = true;

                      for(let p = scheduleWork[i][j].position[0]; p < scheduleWork[i][j].position[0] + subtime; p++) {
                        output[i][p] = currentValue.name;
                      }
                      
                      scheduleWork[i][j].position[0] += subtime;
                      break outer2;
                    }
                  } 
                }
                subtimeFree++;
              }
              //console.log(output);
              //console.log('***');
              if(subtaskSet === false){
                throw new Error(`Don't enough time for ${currentValue.name}`);
              }
            });

            taskSet = true;
            break outer;
          }
          
          if(timeFree == scheduleWork[i][j].timeWork) {
            scheduleWork[i][j].timeWork -= time;
            taskSet = true;

            for(let p = scheduleWork[i][j].position[0]; p < scheduleWork[i][j].position[0] + time; p++) {
              output[i][p] = currentValue.name;
            }
            
            scheduleWork[i][j].position[0] += time;
            break outer;
          }
        } 
      }
      timeFree++;
    }
    if(taskSet === false){
          throw new Error(`Don't enough time for ${currentValue.name}`);
    }
  })

  schedule.forEach(day => {
    console.log(day);
  })
  return week;
}

// schedule.forEach(day => {
//         console.log(day);
//     })
// console.log('********');
const output = algoritm(arrTaskSort, schedule, week)
console.log(output);
