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
