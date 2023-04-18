import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';


document.querySelectorAll(".classInfo").forEach(
    (i) => i.addEventListener('click', () => {
        document.getElementById("editMenu").style.display = "block";
    })
)
document.getElementById("editMenu").onclick = () => { document.getElementById("editMenu").style.display = "none"; }


const scheduleA = Schedule.delete(
    Schedule.editStartTime(
        Schedule.create(
            [
                {
                    name: "classOG",
                    id: 123,
                    startTime: 12,
                    endTime: 15,
                    credits: 2,
                    day: "Monday",
                    location: "MSS-1275",
                    professor: "Travis",
                },
                {
                    name: "classOG2",
                    id: 126,
                    startTime: 12,
                    endTime: 15,
                    credits: 4,
                    day: "Monday",
                    location: "MSS-1275",
                    professor: "Travis",
                },
            ],
            [
                {
                    name: "classA",
                    startTime: 12,
                    endTime: 15,
                    credits: 3,
                    day: "Monday",
                    location: "MSS-1275",
                    professor: "Travis",
                },
                {
                    name: "classB",
                    startTime: 12,
                    endTime: 15,
                    credits: 5,
                    day: "Monday",
                    location: "MSS-1275",
                    professor: "Travis",
                }
            ]
        ),
        126,
        "12:30"
    ),
    123
);

const res = display()(scheduleA);
console.log(res);
