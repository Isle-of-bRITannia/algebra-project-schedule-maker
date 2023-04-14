class Schedule {
    constructor(name, startTime, endTime, location, professor, credits) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.professor = professor;
        this.credits = credits;
    }
};


const schedules = [
    new Schedule('classA', 14, 16, 'room 1', 'professor A', 3),
    new Schedule('classB', 17, 18, 'room 2', 'professor B', 2),
    new Schedule('classC', 19, 20, 'room 3', 'professor C', 5),
    new Schedule('classD', 12, 15, 'room 4', 'professor D', 0),
]


///---------------Not Abstracted Functions-----------------///
// const compareTimes = (startA, startB, endA, endB) => {
//     if (!(startA >= endB) && !(endA <= startB)) {
//         console.log('Times conflict')
//     } else {
//         console.log('No Time Conflict');
//     }
// }
// const getClassInfo = (readClass) => {
//     console.log(
//         `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`
//     )

// }

// const compareTimes = (startA, startB, endA, endB) => {
//     const isConflict = !(startA >= endB) && !(endA <= startB);
//     return isConflict ? 'Times conflict' : 'No time conflict';
// };

// const calcAllCredits = (schedule) => {
//     let totalCredits = 0;
//     for (let i = 0; i < schedule.length; i++) {
//         totalCredits += schedule[i].credits;
//     }
//     return totalCredits;
// };
///---------------------------------------------------------///

const compareTimes = (schedA, schedB) => {
    const isConflict = !(schedA.startTime >= schedB.endTime) && !(schedA.endTime <= schedB.startTime);
    return isConflict ? 'Times conflict' : 'No time conflict';
};

const getClassInfo = (readClass) => {
    return `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`;
};

const calcAllCredits = (schedule) => {
    return schedule.reduce((totalCredits, course) => {
        return totalCredits + course.credits;
    }, 0);
};


export { Alg };


// const Base = (name, startTime, endTime, location, professor, credits) => ({
//     tag: 'base',
//     name, startTime, endTime, location, professor, credits
// });

console.log(getClassInfo(schedules[4]));//classD, 12-15

console.log(calcAllCredits(schedules));//10
