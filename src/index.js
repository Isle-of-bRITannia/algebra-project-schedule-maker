import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';
// displaying it in a table code on the html page stuff goes here

//pop up varibles
const popAdd = document.querySelector('#pop-media-add');
const popEdit = document.querySelector('#pop-media-edit');
const popClear = document.querySelector('#pop-media-clear');
const popEditClear = document.querySelector('#pop-media-editclear');
const popup = document.querySelector('#show-popup');

document.querySelectorAll(".classInfo").forEach(
    (i) => i.addEventListener('click', () => {
        editpopUp();
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
                    name: document.querySelector('#class-name').value,
                    startTime: document.querySelector('#start-time').value,
                    endTime: document.querySelector('#end-time').value,
                    day: document.querySelector('#class-day').value,
                    location: document.querySelector('#class-location').value,
                    professor: document.querySelector('#class-professor').value
                }
            ]);

    console.log(display()(scheduleB));

    console.log('name:' + document.querySelector('#class-name').value,
        'startTime:' + document.querySelector('#start-time').value,
        'endTime:' + document.querySelector('#end-time').value,
        'day:' + document.querySelector('#class-day').value,
        'location:' + document.querySelector('#class-location').value,
        'professor:' + document.querySelector('#class-professor').value);
}

// const res = display()(scheduleA);
// console.log(Schedule.validate(res.oldSchedule));
// console.log(res);




//event listeners
popAdd.addEventListener('click', createNewClass);
popup.addEventListener('click', addpopUp);
popClear.addEventListener('click', addpopUp);
popEdit.addEventListener('click', editpopUp);
popEditClear.addEventListener('click', editpopUp);
