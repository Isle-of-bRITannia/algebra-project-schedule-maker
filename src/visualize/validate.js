const valid = ({ newClass, oldSchedule }) => {
    //if schedule has no time conflicts, calculate total credits
    const compareTimes = (newClass, oldSchedule) => {
        const newClassStartTimeSplit = newClass.startTime.split(':');
        const newStartTimeH = newClassStartTimeSplit[0];
        const newStartTimeM = newClassStartTimeSplit[1];

        const newClassStartTime = Number(newStartTimeH + newStartTimeM);

        const newClassEndTimeSplit = newClass.endTime.split(':');
        const newEndTimeH = newClassEndTimeSplit[0];
        const newEndTimeM = newClassEndTimeSplit[1];

        const newClassEndTime = Number(newEndTimeH + newEndTimeM);

        let isConflict = false;
        oldSchedule.forEach((oldClass) => {
            const oldClassStartTimeSplit = oldClass.startTime.split(':');
            const oldStartTimeH = oldClassStartTimeSplit[0];
            const oldStartTimeM = oldClassStartTimeSplit[1];
            const oldClassStartTime = Number(oldStartTimeH + oldStartTimeM);

            const oldClassEndTimeSplit = oldClass.endTime.split(':');
            const oldEndTimeH = oldClassEndTimeSplit[0];
            const oldEndTimeM = oldClassEndTimeSplit[1];

            const oldClassEndTime = Number(oldEndTimeH + oldEndTimeM);
            if (!(newClassStartTime >= oldClassEndTime) && !(newClassEndTime <= oldClassStartTime)) {
                isConflict = true;
            }
        });
        return isConflict ? 'Times conflict' : calcAllCredits(newClass, oldSchedule);
    };

    //if credits are less than or equal to 18, check if ID is unique
    const calcAllCredits = (newClass, oldSchedule) => {
        const totalCredits = oldSchedule.reduce((total, course) => total + course.credits, 0);
        const newTotalCredits = newClass.credits + totalCredits;
        return (newTotalCredits <= 18) ? checkIdUnique(newClass, oldSchedule) : 'Total Credits exceed 18';
    };

    //check if class has a unique ID, if so the class meets all requirements and is considered valid
    const checkIdUnique = (newClass, oldSchedule) => {
        let isIdUnique = true;
        oldSchedule.forEach((oldClass) => {
            if (newClass.id === oldClass.id) {
                isIdUnique = false;
            }
        });
        return isIdUnique ? oldSchedule : 'ID already exists';
    };

    return compareTimes(newClass, oldSchedule);
};

const getClassInfo = (readClass) => {
    return `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime},
    Credits: ${readClass.credits}, Class ID: ${readClass.id}, Professor: ${readClass.professor}, Location: ${readClass.location}`;
};
