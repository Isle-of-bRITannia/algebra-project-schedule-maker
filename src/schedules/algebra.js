//name, startTime, endTime, location, professor, credits

const Alg = {
    create: (oldSchedule, newSchedule) => ({
        _tag: 'create',
        oldSchedule,
        newSchedule
    }),
    editedSchedule: (schedule) => ({
        _tag: 'edit',
        schedule
    }),
    deleteSchedule: (schedule) => ({
        _tag: 'delete',
        schedule
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