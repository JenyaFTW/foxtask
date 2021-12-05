import { HttpException, Injectable } from "@nestjs/common";
import { createTaskBody, queryTaskGet, updateTaskBody } from "src/task/task.interface";
import { userCreateBody, userUpdateBody } from "src/user/user.interface";
import { Like } from "typeorm";

@Injectable()
export class HelperService {
    async validationTaskBody(body: createTaskBody | updateTaskBody) {
        const availableValue = {
            importance: ['high', 'medium', 'low'],
            type: ['consistent', 'inconsistent']
        }

        const dateNow = new Date();

        for(const key in body) {
            if(availableValue[key] && !availableValue[key].includes(body[key].toLowerCase())) return false;
            else if(key === 'deadline' && body[key] < dateNow) return false;
            else if(key === 'tag') {
                for(const elem in body[key]) {
                    if(elem.length > 10) return false;
                }
            }
            else if(key === 'difficulty' && body[key] <= 0) return false;
        }
    }

    checkValidBodyUser(body: userCreateBody | userUpdateBody): boolean {
        let flag: boolean = true;
        const nameRx: RegExp = /([A-Za-z._])\w+/;
        const emailRx: RegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
        const passwordRx: RegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;

        for(const key in body) {
            if(key === "email" && !emailRx.test(body[key])) {
                flag = false;
            }
            else if(key === "name" && !nameRx.test(body[key])) {
                flag = false;
            }
            else if(key === "password" && !passwordRx.test(body[key])) {
                flag = false;
            }
        }
        return true;
    }

    async prepareQuery(query: queryTaskGet): Promise<queryTaskGet> {
        const fields: queryTaskGet = {}
        for(const key in query) {
            if(key === 'tag') {
                fields[key] = Like(`%${query[key]}%`);
                continue;
            }
            fields[key] = +query[key];
        }
        return fields;
    }

    async prepareTaskBodyToAdd(body: createTaskBody | updateTaskBody) {
        const intField = ['importance']
        const valueImportance = ['low', 'medium', 'high']

        const resBody = {}
        for(const key in body) {
            if(intField.includes(key)) {
                resBody[key] = valueImportance.indexOf(body[key])+1;
                continue;
            }
            resBody[key] = body[key];
            continue;
        }

        return resBody;
    }
}

@Injectable()
export class GenTimetable {
    async genTable(week: number[][], arrTaskSort: object) {
    const arrTimeWork = [];

    function DayTimeWork(week: number[][], arrTimeWork: Array<any>){
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
                    if (day[j + 1] === 0 || j === 23 ) {
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
    function algoritm(arrTaskSort, scheduleWork, week: number[][]) {
        const date = new Date();

        let output = week;
        
        arrTaskSort.forEach((currentTask) => {
            
            let taskSet = false;
            const time = currentTask.difficulty;
            const deadline = new Date(currentTask.deadline).getDate() - date.getDate();
            let timeFree = time;
            while(taskSet != true) {
                outer: for(let i = 0; i < deadline; i++) {
                    for(let j = 0; j < scheduleWork[i].length; j++) {
                    // 24 because it's maximum of hours
                        if (timeFree > 24) {
                            // arrTaskSort['subtask'].forEach((currentTask) => {
                                
                            //     let subtaskSet = false;
                            //     const subtime = currentTask.time_spent_wanted;

                            //     let subtimeFree = subtime;
                            //     while(subtaskSet != true) {
                            //         outer2: for(let i = 0; i < deadline; i++) {
                            //         for(let j = 0; j < scheduleWork[i].length; j++) {
                                        
                            //             // 24 because it's maximum of hours
                            //             if (subtimeFree > 24) {
                            //             throw new Error(`There isn't time for subtask ${currentTask.name}`);                     
                            //             }
                                        
                            //             if(subtimeFree == scheduleWork[i][j].timeWork) {
                            //             scheduleWork[i][j].timeWork -= subtime;
                            //             subtaskSet = true;

                            //             for(let p = scheduleWork[i][j].position[0]; p < scheduleWork[i][j].position[0] + subtime; p++) {
                            //                 output[i][p] = currentTask.name;
                            //             }
                                        
                            //             scheduleWork[i][j].position[0] += subtime;
                            //             break outer2;
                            //             }
                            //         } 
                            //         }
                            //         subtimeFree++;
                            //     }
                            //     //console.log(output);
                            //     //console.log('***');
                            //     if(!subtaskSet){
                            //         throw new Error(`Don't enough time for ${currentTask.name}`);
                            //     }
                            // });
                            
                            // taskSet = true;
                            // break outer;
                            throw new Error(`There isn't time for task ${currentTask.name}`);
                        }
                        
                        if(timeFree == scheduleWork[i][j].timeWork) {
                            
                            scheduleWork[i][j].timeWork -= time;
                            taskSet = true;

                            for(let p = scheduleWork[i][j].position[0]; p < scheduleWork[i][j].position[0] + time; p++) {
                                output[i][p] = currentTask.id;
                            }
                            
                            scheduleWork[i][j].position[0] += time;
                            break outer;
                        }
                    } 
                }
            timeFree++;
            }
            if(!taskSet){
                throw new Error(`Don't enough time for ${currentTask.name}`);
            }
        })
        return week;
        }
        const output = algoritm(arrTaskSort, schedule, week)
        return output;
    }
}