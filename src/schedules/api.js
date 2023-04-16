import { Alg } from './algebra.js';

const API = {
    create: (oldSchedule, newSchedule) => Alg.create(oldSchedule, newSchedule),
    // do for all vars: name, startTime, endTime, location, professor, credits
    editName: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "name", newValue),
    delete: (schedule, idOfScheduleToDelete) => Alg.deleteSchedule(schedule, idOfScheduleToDelete),
    validate: (schedule) => Alg.valid(schedule),
};

export {
    API as Schedule
}

// edit -> sched
// delete (evt, sched)
// combine(schedA, schedB)
// base 
// validate(a, b) => schedule 


// schedule types:
//  scedule with conflicts


//  EditedSchedule
//  DeletedSchedule
//  ConcatSchedule
//  Validated