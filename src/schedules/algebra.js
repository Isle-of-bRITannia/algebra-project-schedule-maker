//name, startTime, endTime, location, professor, credits

const Alg = {
    create: (oldSchedule, newSchedule) => ({
        _tag: 'create',
        oldSchedule,
        newSchedule
    }),
    editedSchedule: (schedule, idOfScheduleToChange, valueToChange, newValue) => ({
        _tag: 'edit',
        schedule,
        idOfScheduleToChange,
        valueToChange,
        newValue
    }),
    deleteSchedule: (schedule, idOfScheduleToDelete) => ({
        _tag: 'delete',
        schedule,
        idOfScheduleToDelete
    }),
    validSchedule: (schedule) => ({
        _tag: 'valid',
        schedule
    }),
};


export { Alg };


// const Base = (name, startTime, endTime, location, professor, credits) => ({
//     tag: 'base',
//     name, startTime, endTime, location, professor, credits
// });

// const EditedSchedule = (editInfo, schedule) => ({
//     tag: 'edit',
//     schedule,