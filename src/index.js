import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';
// displaying it in a table code on the html page stuff goes here

//pop up varibles
const popAdd = document.querySelector('#pop-media-add');
const popEdit = document.querySelector('#pop-media-edit');
const popAddClose = document.querySelector('#pop-media-cancel');
const popEditClose = document.querySelector('#pop-media-editcancel');
const popClear = document.querySelector('#pop-media-clear');
const popEditClear = document.querySelector('#pop-media-editclear');
const popup = document.querySelector('#show-popup');

const scheduleTable = document.querySelector('#scheduleTable');

let currentRow = 5;
let daysOfTheWeek = ["async", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
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


let scheduleA =
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
    scheduleA =
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

    const res = display()(scheduleA);
    if (Schedule.validate(res.oldSchedule)) {
        console.log(res);
        let newRow = scheduleTable.insertRow(currentRow++);
        for (let i = 0; i < daysOfTheWeek.length; i++) {
            if (daysOfTheWeek[i] === document.querySelector('#class-day').value.toLowerCase()) {

                let newCell = newRow.insertCell(i);
                newCell.classList.add("classInfo");
                //console.log(res.oldSchedule)
                let tempStart;
                let tempEnd;
                if (res[res.length - 1].startTime.split(":")[0] > 12) {
                    tempStart = Number(res[res.length - 1].startTime) - 12;
                    tempStart.toString();
                    tempStart += 'pm';
                }
                else {
                    tempStart = res[res.length - 1].startTime;
                    tempStart.toString();
                    tempStart += 'am';
                }

                if (res[res.length - 1].endTime.split(":")[0] > 12) {
                    tempEnd = Number(res[res.length - 1].endTime) - 12;
                    tempEnd.toString();
                    tempEnd += 'pm';
                }
                else {
                    tempEnd = res[res.length - 1].endTime;
                    tempEnd.toString();
                    tempEnd += 'am';
                }
                newCell.innerHTML = `${res[res.length - 1].name} ${tempStart}-${tempEnd}`;
            }
            else {
                let newCell = newRow.insertCell(i);
                newCell.classList.add("classInfo");
                newCell.innerHTML = " ";
            }
        }
    }
    addpopUp();
}

const clearAddFields = () => {
    document.querySelector('#class-name').value = "";
    document.querySelector('#start-time').value = '';
    document.querySelector('#end-time').value = '';
    document.querySelector('#class-day').value = '';
    document.querySelector('#class-location').value = '';
    document.querySelector('#class-professor').value = '';
    document.querySelector('#class-credits').value = '';

}

// const res = display()(scheduleA);
// console.log(Schedule.validate(res.oldSchedule));





//event listeners
popAdd.addEventListener('click', createNewClass);
popup.addEventListener('click', addpopUp);
popClear.addEventListener('click', clearAddFields);
popEdit.addEventListener('click', editpopUp);
popEditClear.addEventListener('click', editpopUp);
popAddClose.addEventListener('click', addpopUp);
popEditClose.addEventListener('click', editpopUp);