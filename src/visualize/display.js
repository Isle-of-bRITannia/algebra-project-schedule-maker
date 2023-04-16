import { pipe, match, randomNum } from '../utility/index.js';
import { Alg } from "../schedules/algebra.js";

// const forEach = (f) => (arr) => arr.forEach(f);


const display = () => match({
    // needs to: make a unique id and create and object to store info in
    // call validate
    //Jordan
    create: ({ oldSchedule, newSchedule }) => {
        // oldSchedule.forEach((s) => s.id ?? randomNum());
        // debugger;
        newSchedule.forEach((s) => s.id = randomNum());
        return Alg.create((oldSchedule.concat(newSchedule)), []);
    },
    //Jordan
    edit: ({ schedule, idOfScheduleToChange, valueToChange, newValue }) => {
        // debugger;
        const combinedSchedule = display()(Alg.create(schedule.oldSchedule, schedule.newSchedule));
        combinedSchedule.oldSchedule.forEach( (s) => s.id == idOfScheduleToChange ? s[valueToChange] = newValue : "")
        // forEach((s) => s.id == idOfScheduleToChange ? s[valueToChange] = newValue : "")(combinedSchedule.oldSchedule)
        return Alg.create(combinedSchedule.oldSchedule, []);

        // return pipe(
        //     forEach((s) => s.id == idOfScheduleToChange ? s[valueToChange] = newValue : "")(display()(Alg.create(schedule.oldSchedule, schedule.newSchedule).oldSchedule).oldSchedule),
        //     Alg.create
        // );
    },
    //Jordan
    // find class to delete in list and slice array in correct spot
    delete: ({ schedule, idOfScheduleToDelete, }) => {
        // debugger;
        const combinedSchedule = display()(Alg.create(schedule.oldSchedule, schedule.newSchedule));
        combinedSchedule.oldSchedule.filter( (s) => s.id == idOfScheduleToDelete)
        return Alg.create(combinedSchedule.oldSchedule, []);
    },

    // needs to run: checkTime, checkInfo, checkIdUnique, calcCredits (total 18 max),
    valid: ({ oldSchedule }) => {
        return oldSchedule;
    }


})
export { display };


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
