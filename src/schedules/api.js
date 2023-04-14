import  * as Alg from './schedules/algebra.js';

 const Alg = {
    create: (oldSchedule, newSchedule) => Alg.create(oldSchedule, newSchedule),
    // do for all vars: name, startTime, endTime, location, professor, credits
    editTime: (schedule) => Alg.edit(schedule, idOfScheduleToChange, "time", newValue),
    delete: (schedule) => Alg.delete(schedule, idOfScheduleToChange),
    validate: (schedule) => Alg.valid(schedule),
};



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