import {Alg}from './algebra.js';

const API = {
    create: (oldSchedule, newSchedule) => Alg.create(oldSchedule, newSchedule),
    // do for all vars: name, startTime, endTime, location, professor, credits
    editTime: (schedule) => Alg.edit(schedule, idOfScheduleToChange, "time", newValue),
    delete: (schedule) => Alg.delete(schedule, idOfScheduleToChange),
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