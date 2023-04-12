class Schedule {
    constructor(name, startTime, endTime, location, professor) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.professor = professor;
    }
};


const schedules = [
    new Schedule('classD', 12, 15),
    new Schedule('classA', 14, 16),
    new Schedule('classB', 17, 18),
    new Schedule('classC', 19, 20),
]


///---------------Old Functions-----------------///
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
//   };
///---------------------------------------------------------///

const compareTimes = (schedA, schedB) => {
    const isConflict = !(schedA.startTime >= schedB.endTime) && !(schedA.endTime <= schedB.startTime);
    return isConflict ? 'Times conflict' : 'No time conflict';
};

const getClassInfo = (readClass) => {
    return `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`;
};




console.log(compareTimes(schedules[0], schedules[1]));//conflict
console.log(compareTimes(schedules[0], schedules[2]));//no conflict

console.log(getClassInfo(schedules[0]));//classD, 12-15

export {compareTimes, getClassInfo};