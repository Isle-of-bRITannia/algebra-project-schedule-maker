import { pipe, match, randomNum } from '../utility/index.js';
import { Alg } from "../schedules/algebra.js";

const display = () => match({
    create: ({ oldSchedule, newSchedule }) => {
        newSchedule.forEach((s) => s.id  === undefined ? s.id = randomNum() : "");
        return [
            ...oldSchedule,
            ...newSchedule
        ]
    },
    edit: ({ schedule, idOfScheduleToChange, valueToChange, newValue }) => {
        const combinedSchedule = display()(schedule);
        combinedSchedule.forEach( (s) => s.id == idOfScheduleToChange ? s[valueToChange] = newValue : "")
        return combinedSchedule;
    },
    delete: ({ schedule, idOfScheduleToDelete, }) => {
        debugger;
        const combinedSchedule = display()(schedule);
        const modifiedArray = combinedSchedule.filter( (s) => s.id != idOfScheduleToDelete)
        return modifiedArray;
    },
    valid: ({ oldSchedule }) => {
        //Check unique ID => Check time conflict => Check total credits =>Valid
        const compareTimes = (oldSchedule) => {
            let isConflict = false;
            oldSchedule.forEach((oldClass) => {
                const oldClassStartTimeSplit = oldClass.startTime.split(':');
                const oldStartTimeH = oldClassStartTimeSplit[0];
                const oldStartTimeM = oldClassStartTimeSplit[1];
                const oldClassStartTime = Number(oldStartTimeH + oldStartTimeM);

                const oldClassEndTimeSplit = oldClass.endTime.split(':');
                const oldEndTimeH = oldClassEndTimeSplit[0];
                const oldEndTimeM = oldClassEndTimeSplit[1];

                const oldClassEndTime = Number(oldEndTimeH + oldEndTimeM);

                oldSchedule.forEach((newClass) => {
                    const newClassStartTimeSplit = newClass.startTime.split(':');
                    const newStartTimeH = newClassStartTimeSplit[0];
                    const newStartTimeM = newClassStartTimeSplit[1];

                    const newClassStartTime = Number(newStartTimeH + newStartTimeM);

                    const newClassEndTimeSplit = newClass.endTime.split(':');
                    const newEndTimeH = newClassEndTimeSplit[0];
                    const newEndTimeM = newClassEndTimeSplit[1];

                    const newClassEndTime = Number(newEndTimeH + newEndTimeM);

                    if (oldClass.id !== newClass.id) {
                        if (!(newClassStartTime >= oldClassEndTime) && !(newClassEndTime <= oldClassStartTime)) {
                            isConflict = true;
                        }
                    }
                })
            });
            return isConflict ? 'Times conflict' : calcAllCredits;
        };

        const calcAllCredits = (oldSchedule) => {
            const totalCredits = oldSchedule.reduce((total, course) => total + course.credits, 0);
            return console.log(totalCredits);
        };

        const checkIdUnique = (oldSchedule) => {
            const arrayOfIds = [];

            oldSchedule.forEach((schedule) => {
                if (arrayOfIds.indexOf(schedule.id) == -1) {
                    arrayOfIds.push(schedule.id);
                }
            }

            );
            if (arrayOfIds.length == oldSchedule.length) {
                compareTimes(oldSchedule);
            }
            return arrayOfIds.length == oldSchedule.length;
        };

        return checkIdUnique(oldSchedule)
    }

})
export { display };



const getClassInfo = (readClass) => {
    return `Class Name: ${readClass.name}, 
    Class Time: ${readClass.startTime} - ${readClass.endTime},
    Credits: ${readClass.credits}, 
    Class ID: ${readClass.id}, 
    Professor: ${readClass.professor},
    Location: ${readClass.location}`;
};


// ScheduleList = [
//     {
//    id: "123" ,
//    class: {className:"guess", }
//     },
// ]
// ScheduleList[]
