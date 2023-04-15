import { pipe, match } from '../utility/index.js';
import { Alg } from "../schedules/algebra.js";

const display = (schedule) => match({
    // needs to: make a unique id and create and object to store info in
    // call validate
    //Jordan
    create: ({oldSchedule, newSchedule}) => {
        return oldSchedule.concat(newSchedule);
    },
    //Jordan
    edit: ({oldSchedule, idOfScheduleToChange, valueToChange, newValue}) => {
        return oldSchedule[idOfScheduleToChange][valueToChange] = newValue;
    },
    //Jordan
    // find class to delete in list and slice array in correct spot
    delete: ({oldSchedule, idOfScheduleToChange, }) => {
        return oldSchedule[idOfScheduleToChange] 
    },
    
    // needs to run: checkTime, checkInfo, checkIdUnique, calcCredits (total 18 max),
    valid: ({oldSchedule}) => {
        return oldSchedule;
    }


})(schedule)
export {display};


const compareTimes = (schedA, schedB) => {
    const isConflict = !(schedA.startTime >= schedB.endTime) && !(schedA.endTime <= schedB.startTime);
    return isConflict ? 'Times conflict' : 'No time conflict';
};

const getClassInfo = (readClass) => {
    return `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`;
};

const calcAllCredits = (schedule) => {
    return schedule.reduce((totalCredits, course) => {
        return totalCredits + course.credits;
    }, 0);
};

//make a create unique id function


// console.log(compareTimes(schedules[4], schedules[1]));//conflict
// console.log(compareTimes(schedules[4], schedules[2]));//no conflict

// console.log(getClassInfo(schedules[4]));//classD, 12-15

// console.log(calcAllCredits(schedules));//10



///---------------Not Abstracted Functions-----------------///
// const compareTimes = (startA, startB, endA, endB) => {
//     if (!(startA >= endB) && !(endA <= startB)) {
//         console.log('Times conflict')
//     } else {
//         console.log('No Time Conflict');
//     }
// }
// const getClassInfo = (readClass) => {
//     console.log(
//         `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`
//     )

// }

// const compareTimes = (startA, startB, endA, endB) => {
//     const isConflict = !(startA >= endB) && !(endA <= startB);
//     return isConflict ? 'Times conflict' : 'No time conflict';
// };

// const calcAllCredits = (schedule) => {
//     let totalCredits = 0;
//     for (let i = 0; i < schedule.length; i++) {
//         totalCredits += schedule[i].credits;
//     }
//     return totalCredits;
// };
///---------------------------------------------------------///


// ScheduleList = [
//     {
//    id: "123" ,
//    class: {className:"guess", }
//     },
// ]
// ScheduleList[]
