import { Alg } from './algebra.js';

const API = {
    create: (oldSchedule, newSchedule) => Alg.create(oldSchedule, newSchedule),
    // do for all vars: name, startTime, endTime, location, professor, credits
    editName: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "name", newValue),
    editStartTime: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "startTime", newValue),
    editEndTime: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "endTime", newValue),
    editCredits: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "credits", newValue),
    editDay: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "day", newValue),
    editLocation: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "location", newValue),
    editProfessor: (schedule, idOfScheduleToChange, newValue) => Alg.editedSchedule(schedule, idOfScheduleToChange, "professor", newValue),
    delete: (schedule, idOfScheduleToDelete) => Alg.deleteSchedule(schedule, idOfScheduleToDelete),
    validate: (schedule) => Alg.validSchedule(schedule),

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