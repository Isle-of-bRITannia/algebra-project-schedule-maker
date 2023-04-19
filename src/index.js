import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';
// displaying it in a table code on the html page stuff goes here

//pop up varibles
const popAdd = document.querySelector('#pop-media-add');
// default set to disabled
popAdd.setAttribute('disabled', 'disabled');
const popEdit = document.querySelector('#pop-media-edit');
const popAddClose = document.querySelector('#pop-media-cancel');
const popEditClose = document.querySelector('#pop-media-editcancel');
const popClear = document.querySelector('#pop-media-clear');
const popEditClear = document.querySelector('#pop-media-editclear');
const popup = document.querySelector('#show-popup');

// Reference to the table
const scheduleTable = document.querySelector('#scheduleTable');

// edit fields refrences var names
const editFieldName = document.querySelector('#edit-class-name');
const editFieldStartTime = document.querySelector('#edit-start-time');
const editFieldEndTime = document.querySelector('#edit-end-time');
const editFieldLocation = document.querySelector('#edit-class-room');
const editFieldDay = document.querySelector('#edit-class-day');
const editFieldProfessor = document.querySelector('#edit-class-professor');
const editFieldCredits = document.querySelector('#edit-class-credits');

// Current schedule
let res;
let currSchedId;

// default/placeholder Schedule
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
            },
            {
                name: "classC",
                startTime: '05:40',
                endTime: '22:20',
                day: "Wednesday",
                credits: 5,
                location: "MSS-1275",
                professor: "Travis",
            },
            {
                name: "classD",
                startTime: '05:40',
                endTime: '22:20',
                day: "Wednesday",
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

//toggle popups on click
const addpopUp = () => {
    document.querySelector('#popup-1').classList.toggle('active');
    clearAddFields();
};
const editpopUp = () => {
    document.querySelector('#popup-2').classList.toggle('active');
}

// Sort the classes by time
const sortByTime = (classA, classB) => {
    const classAStartTimeSplit = classA.startTime.split(':');
    const classAStartTimeH = classAStartTimeSplit[0];
    const classAStartTimeM = classAStartTimeSplit[1];

    const classAStartTime = Number(classAStartTimeH + classAStartTimeM);

    const classBStartTimeSplit = classB.startTime.split(':');
    const classBStartTimeH = classBStartTimeSplit[0];
    const classBStartTimeM = classBStartTimeSplit[1];

    const classBStartTime = Number(classBStartTimeH + classBStartTimeM);
    return classAStartTime - classBStartTime;
}

// Create the table based on the schedule
const makeTable = (res) => {
    // remove all current rows
    document.querySelectorAll(".rowOfClasses").forEach(
        (r) => { r.remove() }
    );

    if (Schedule.validate(res.oldSchedule)) {
        console.log(res);

        // make array of classers per day
        const monClasses = res.filter((c) => c.day === "Monday").sort(sortByTime);
        const tuesClasses = res.filter((c) => c.day === "Tuesday").sort(sortByTime);
        const wedClasses = res.filter((c) => c.day === "Wednesday").sort(sortByTime);
        const thursClasses = res.filter((c) => c.day === "Thursday").sort(sortByTime);
        const friClasses = res.filter((c) => c.day === "Friday").sort(sortByTime);
        const satClasses = res.filter((c) => c.day === "Saturday").sort(sortByTime);

        // finding the day with the most classes
        const numClasses = [monClasses.length, tuesClasses.length, wedClasses.length, thursClasses.length, friClasses.length, satClasses.length];
        const mostClasses = Math.max(...numClasses);


        // make the row elements function - how to display
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
                    tempEnd += 'pm';
                }
                else {
                    tempEnd = classItem.endTime;
                    tempEnd.toString();
                    tempEnd += 'am';
                }
                newCell.innerHTML = `${classItem.name}, <br> ${tempStart}-${tempEnd} , <br> ${classItem.location} , <br> ${classItem.professor}`;
            } else {
                let newCell = rowElement.insertCell();
                newCell.innerHTML = "";
            }
        }

        // make rows
        for (let i = 0; i < mostClasses; i++) {
            const newRow = scheduleTable.insertRow();
            newRow.classList.add("rowOfClasses");

            makeCell(monClasses[i], newRow);
            makeCell(tuesClasses[i], newRow);
            makeCell(wedClasses[i], newRow);
            makeCell(thursClasses[i], newRow);
            makeCell(friClasses[i], newRow);
            makeCell(satClasses[i], newRow);

        }
    }

    // add on click for each class
    document.querySelectorAll(".classInfo").forEach(
        (i) => i.addEventListener('click', (e) => {
            editpopUp();
            const currClass = res.find((c) => c.id == e.target.id);
            currSchedId = e.target.id
            // load in current data
            editFieldName.value = currClass.name;
            editFieldStartTime.value = currClass.startTime;
            editFieldEndTime.value = currClass.endTime;
            editFieldDay.value = currClass.day;
            editFieldLocation.value = currClass.location;
            editFieldProfessor.value = currClass.professor;
            editFieldCredits.value = currClass.credits;

        })
    );
}


// onload display data
res = display()(scheduleA);
makeTable(res);


// Create a new class
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
                    credits: document.querySelector('#class-credits').value,
                    professor: document.querySelector('#class-professor').value
                }
            ]);
    res = display()(scheduleA);
    makeTable(res);

}

const editClass = () => {
    // Edit each value based on the fields current value
    const scheduleEdited = Schedule.editName(
        Schedule.editStartTime(
            Schedule.editEndTime(
                Schedule.editDay(
                    Schedule.editLocation(
                        Schedule.editProfessor(
                            Schedule.editCredits(scheduleA,
                                currSchedId, editFieldCredits.value),
                            currSchedId, editFieldProfessor.value),
                        currSchedId, editFieldLocation.value),
                    currSchedId, editFieldDay.value),
                currSchedId, editFieldStartTime.value)
            , currSchedId, editFieldEndTime.value),
        currSchedId, editFieldName.value
    );
    res = display()(scheduleEdited);

    editpopUp();
    makeTable(res);
}


//disable the addClass button if the fields are empty
const disableAddClassBttn = () => {
    if (document.querySelector('#class-name').value.trim() !== "" &&
        document.querySelector('#start-time').value.trim() !== "" &&
        document.querySelector('#end-time').value.trim() !== "" &&
        document.querySelector('#class-day').value.trim() !== "" &&
        document.querySelector('#class-location').value.trim() !== "" &&
        document.querySelector('#class-credits').value.trim() !== "" &&
        document.querySelector('#class-professor').value.trim() !== "") {
        popAdd.removeAttribute('disabled');
    } else {
        popAdd.setAttribute('disabled', 'disabled');
    }
}
//disable the editClass button if the fields are empty
const disableEditClassBttn = () => {
    if (editFieldName.value.trim() !== "" &&
        editFieldStartTime.value.trim() !== "" &&
        editFieldEndTime.value.trim() !== "" &&
        editFieldDay.value.trim() !== "" &&
        editFieldLocation.value.trim() !== "" &&
        editFieldCredits.value.trim() !== "" &&
        editFieldProfessor.value.trim() !== "") {
        popEdit.removeAttribute('disabled');
    } else {
        popEdit.setAttribute('disabled', 'disabled');
    }
}



//event listeners to add class button
document.querySelector('#class-name').addEventListener('change', disableAddClassBttn);
document.querySelector('#start-time').addEventListener('change', disableAddClassBttn);
document.querySelector('#end-time').addEventListener('change', disableAddClassBttn);
document.querySelector('#class-day').addEventListener('change', disableAddClassBttn);
document.querySelector('#class-location').addEventListener('change', disableAddClassBttn);
document.querySelector('#class-professor').addEventListener('change', disableAddClassBttn);
document.querySelector('#class-credits').addEventListener('change', disableAddClassBttn);

//event listeners to edit class button
editFieldName.addEventListener('change', disableEditClassBttn);
editFieldStartTime.addEventListener('change', disableEditClassBttn);
editFieldEndTime.addEventListener('change', disableEditClassBttn);
editFieldDay.addEventListener('change', disableEditClassBttn);
editFieldLocation.addEventListener('change', disableEditClassBttn);
editFieldProfessor.addEventListener('change', disableEditClassBttn);
editFieldCredits.addEventListener('change', disableEditClassBttn);

//event listeners for the buttons in the popup

// Add/create
popAdd.addEventListener('click', createNewClass);
popup.addEventListener('click', addpopUp);
popAddClose.addEventListener('click', addpopUp);
popAddClose.addEventListener('click', addpopUp);
popClear.addEventListener('click', clearAddFields);

// Edit
popEdit.addEventListener('click', editClass);
popEditClear.addEventListener('click', editpopUp);
popEditClose.addEventListener('click', editpopUp);