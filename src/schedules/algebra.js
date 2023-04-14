class Schedule {
    constructor(name, startTime, endTime, location, professor, credits) {
        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
        this.professor = professor;
        this.credits = credits;
    }
    getClassInfo() {
        return `Class Name: ${this.name}, Class Time: ${this.startTime} - ${this.endTime}, Class Location: ${this.location}, Class Professor: ${this.professor}, Class Credits: ${this.credits}`;
    }

    //compare times of self to inputed array
    // compareTimes(otherSchedule)//if other schedule is an array {
    //     otherSchedule.map(
    //         (schedule) => {
    //             if (!(this.startTime >= schedule.endTime) && !(this.endTime <= schedule.startTime)) {
    //                 console.log('Times conflict')
    //             } else {
    //                 console.log('No Time Conflict');
    //             }
    //         })
    // }
};


const schedules = [
    new Schedule('classA', 14, 16, 'room 1', 'professor A', 3),
    new Schedule('classB', 17, 18, 'room 2', 'professor B', 2),
    new Schedule('classC', 19, 20, 'room 3', 'professor C', 5),
    new Schedule('classD', 12, 15, 'room 4', 'professor D', 0),
]

//generate unique number id for each class
const generateNumberID = () => {
    return Math.floor(Math.random() * 100000);
}

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

// const getClassInfo = (readClass) => {
//     return `Class Name: ${readClass.name}, Class Time: ${readClass.startTime} - ${readClass.endTime}`;
// };

const calcAllCredits = (schedule) => {
    return schedule.reduce((totalCredits, course) => {
        return totalCredits + course.credits;
    }, 0);
};




console.log(compareTimes(schedules[4], schedules[1]));//conflict
console.log(compareTimes(schedules[4], schedules[2]));//no conflict

console.log(schedules[4].getClassInfo());//classD, 12-15

console.log(calcAllCredits(schedules));//10

export { compareTimes, getClassInfo, calcAllCredits };