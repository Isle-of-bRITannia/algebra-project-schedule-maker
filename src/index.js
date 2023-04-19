import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';
// displaying it in a table code on the html page stuff goes here

//pop up varibles
const popAdd = document.querySelector('#pop-media-add');
const popEdit = document.querySelector('#pop-media-edit');
const popClear = document.querySelector('#pop-media-clear');
const popEditClear = document.querySelector('#pop-media-editclear');
const popup = document.querySelector('#show-popup');

// field vars for add class
const fieldName = document.querySelector('#class-name');
const fieldStartTime = document.querySelector('#start-time');
const fieldEndTime = document.querySelector('#end-time');
const fieldDay = document.querySelector('#class-day');
const fieldCredits = document.querySelector('#class-credits');
const fieldLocation = document.querySelector('#class-location');
const fieldProfessor = document.querySelector('#class-professor');

document.querySelectorAll(".classInfo").forEach(
    (i) => i.addEventListener('click', (e) => {
        editpopUp();
        console.log(e.target);
    })
)


//toggle popup on click
const addpopUp = () => {
    document.querySelector('#popup-1').classList.toggle('active');
};
const editpopUp = () => {
    document.querySelector('#popup-2').classList.toggle('active');
}


const scheduleA =
    Schedule.create([
        {
            name: "classOG",
            id: 123,
            startTime: '12:50',
            endTime: '15:00',
            day: "Monday",
            credits: 2,
            location: "MSS-1275",
            professor: "Travis",
        },
        {
            name: "classOG",
            id: 123,
            startTime: '19:13',
            endTime: '20:10',
            day: "Monday",
            credits: 4,
            location: "MSS-1275",
            professor: "Travis",
        },
    ],
        [
            {
                name: "classA",
                startTime: '00:30',
                endTime: '01:20',
                day: "Monday",
                credits: 3,
                location: "MSS-1275",
                professor: "Travis",
            },
            {
                name: "classB",
                startTime: '05:40',
                endTime: '22:20',
                day: "Monday",
                credits: 5,
                location: "MSS-1275",
                professor: "Travis",
            }
        ]);



const createNewClass = () => {
    const scheduleB =
        Schedule.create(
            display()(scheduleA)
            ,
            [
                {
                    name: fieldName.value,
                    startTime: fieldStartTime.value,
                    endTime: fieldEndTime.value,
                    day: fieldDay.value,
                    credits: fieldCredits.value,
                    location: fieldLocation.value,
                    professor: fieldProfessor.value
                }
            ]);

    console.log(display()(scheduleB));

    console.log('name:' + fieldName.value,
        'startTime:' + fieldStartTime.value,
        'endTime:' + fieldEndTime.value,
        'day:' + fieldDay.value,
        'credits' + fieldCredits.value,
        'location:' + fieldLocation.value,
        'professor:' + fieldProfessor.value);
}

// const res = display()(scheduleA);
// console.log(Schedule.validate(res.oldSchedule));
// console.log(res);




//event listeners
// Add Class pop up
popAdd.addEventListener('click', createNewClass);
popup.addEventListener('click', addpopUp);
popClear.addEventListener('click', () => {
    addpopUp();

    // clear values on add pop class up close
    fieldName.value = "";
    fieldStartTime.value = "";
    fieldEndTime.value = "";
    fieldDay.value = "";
    fieldCredits.value = "";
    fieldLocation.value = "";
    fieldProfessor.value = "";
});

// Edit pop up
popEdit.addEventListener('click', editpopUp);
popEditClear.addEventListener('click', editpopUp);
