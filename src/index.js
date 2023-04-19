import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';
// displaying it in a table code on the html page stuff goes here

//pop up varibles
const popAdd = document.querySelector('#pop-media-add');
popAdd.setAttribute('disabled', 'disabled');
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
            id: 128,
            startTime: '19:13',
            endTime: '20:10',
            day: "Tuesday",
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
                day: "Friday",
                credits: 5,
                location: "MSS-1275",
                professor: "Travis",
            }
        ]);

const clearAddFields = () => {
    document.querySelector('#class-name').value = "";
    document.querySelector('#start-time').value = '';
    document.querySelector('#end-time').value = '';
    document.querySelector('#class-day').value = '';
    document.querySelector('#class-location').value = '';
    document.querySelector('#class-professor').value = '';
    document.querySelector('#class-credits').value = '';

}

//toggle popup on click
const addpopUp = () => {
    document.querySelector('#popup-1').classList.toggle('active');
    clearAddFields();
};
const editpopUp = () => {
    document.querySelector('#popup-2').classList.toggle('active');
}

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
    // remove all current rows
    document.querySelectorAll(".rowOfClasses").forEach(
        (r) => { r.remove() }
    );
    const res = display()(scheduleA);
    if (Schedule.validate(res.oldSchedule)) {
        console.log(res);
        // make array of classers per day
        const monClasses = res.filter((c) => c.day === "Monday");
        const tuesClasses = res.filter((c) => c.day === "Tuesday");
        const wedClasses = res.filter((c) => c.day === "Wednesday");
        const thursClasses = res.filter((c) => c.day === "Thursday");
        const friClasses = res.filter((c) => c.day === "Friday");
        const satClasses = res.filter((c) => c.day === "Saturday");

        // finding the day with the most classes
        const numClasses = [monClasses.length, tuesClasses.length, wedClasses.length, thursClasses.length, friClasses.length, satClasses.length];
        const mostClasses = Math.max(...numClasses);


        // make the row elements function
        const makeCell = (classItem, rowElement) => {
            if (classItem) {
                let newCell = rowElement.insertCell();
                newCell.classList.add("classInfo");
                newCell.setAttribute("id", classItem.id);
                let tempStart;
                let tempEnd;
                if (classItem.startTime.split(":")[0] > 12) {
                    tempStart = Number(classItem.startTime.split(":")[0]) - 12;
                    tempStart.toString();
                    tempStart += ':'+classItem.startTime.split(":")[1];
                    tempStart += 'pm';
                }
                else {
                    tempStart = classItem.startTime;
                    tempStart.toString();
                    tempStart += 'am';
                }

                if (classItem.endTime.split(":")[0] > 12) {
                    tempEnd = Number(classItem.endTime.split(":")[0]) - 12;
                    tempEnd.toString();
                    tempEnd += ':'+classItem.endTime.split(":")[1];
                    tempEnd += 'pm';
                }
                else {
                    tempEnd = classItem.endTime;
                    tempEnd.toString();
                    tempEnd += 'am';
                }
                newCell.innerHTML = `${classItem.name} <br> ${tempStart}-${tempEnd}  <br> ${classItem.location}  <br> ${classItem.professor}`;
            } else {
                let newCell = rowElement.insertCell();
                newCell.classList.add("emptyclassInfo");
                newCell.innerHTML = "";
            }
        }

        for (let i = 0; i < mostClasses; i++) {
            const newRow = scheduleTable.insertRow();

            makeCell(monClasses[i], newRow);
            makeCell(tuesClasses[i], newRow);
            makeCell(wedClasses[i], newRow);
            makeCell(thursClasses[i], newRow);
            makeCell(friClasses[i], newRow);
            makeCell(satClasses[i], newRow);

        }
    }
    addpopUp();
}

//disable the addClass button if the fields are empty
const addClassButton = () => {
    if (document.querySelector('#class-name').value.trim() !== "" &&
        document.querySelector('#start-time').value.trim() !== "" &&
        document.querySelector('#end-time').value.trim() !== "" &&
        document.querySelector('#class-day').value.trim() !== "" &&
        document.querySelector('#class-location').value.trim() !== "" &&
        document.querySelector('#class-professor').value.trim() !== "") {
        popAdd.removeAttribute('disabled');
    } else {
        popAdd.setAttribute('disabled', 'disabled');
    }
}


//event listeners to update add class button
document.querySelector('#class-name').addEventListener('change', addClassButton);
document.querySelector('#start-time').addEventListener('change', addClassButton);;
document.querySelector('#end-time').addEventListener('change', addClassButton);;
document.querySelector('#class-day').addEventListener('change', addClassButton);;
document.querySelector('#class-location').addEventListener('change', addClassButton);;
document.querySelector('#class-professor').addEventListener('change', addClassButton);;
document.querySelector('#class-credits').addEventListener('change', addClassButton);;

//event listeners
popAdd.addEventListener('click', createNewClass);
popup.addEventListener('click', addpopUp);
popClear.addEventListener('click', clearAddFields);
popEdit.addEventListener('click', editpopUp);
popEditClear.addEventListener('click', editpopUp);
popAddClose.addEventListener('click', addpopUp);
popAddClose.addEventListener('click', addpopUp);
popEditClose.addEventListener('click', editpopUp);