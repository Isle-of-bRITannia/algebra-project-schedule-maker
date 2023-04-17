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