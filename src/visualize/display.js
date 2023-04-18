import { pipe, match, randomNum } from '../utility/index.js';
import { Alg } from "../schedules/algebra.js";


const display = () => match({
    create: ({ oldSchedule, newSchedule }) => {
        newSchedule.forEach((s) => s.id = randomNum());
        return [
            ...oldSchedule,
            ...newSchedule
        ]
    },
    edit: ({ schedule, idOfScheduleToChange, valueToChange, newValue }) => {
        debugger;
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

    // needs to run: checkTime, checkInfo, checkIdUnique, calcCredits (total 18 max),
    valid: ({ oldSchedule }) => {
        return oldSchedule;
    }


})
export { display };
