import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';


// Long line of questions/thoughts
// should schedule be a class? 
// Should all the functions be defined in it? (i kinda don't think so but not sure)
// Where should schedule be defined? algebra or the api page?


// displaying it in a table code on the html page stuff goes here
// Jordan
document.querySelectorAll(".classInfo").forEach(
    (i) => i.addEventListener('click', () => {
        document.getElementById("editMenu").style.display = "block";
    })
)
document.getElementById("editMenu").onclick = () => {document.getElementById("editMenu").style.display = "none";}


// const scheduleA = Schedule.delete(
const scheduleA = Schedule.editName(
    Schedule.create([
        {
            name: "classOG",
            id: 123,
            startTime: 12,
            endTime: 15,
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
                day: "Monday",
                location: "MSS-1275",
                professor: "Travis",
            },
            {
                name: "classB",
                startTime: 12,
                endTime: 15,
                day: "Monday",
                location: "MSS-1275",
                professor: "Travis",
            }
        ]
    ),
    123,
    "classTest2"
);
//     123
// );

const res = display()(scheduleA);
// const res = display()(Schedule.editName(scheduleA, 123, "classTest"));

// const scheduleB = Schedule.editName(res.oldSchedule, "123", "classTest");
// const res2 = display()(scheduleB);

// const scheduleC = Schedule.delete(res2, "123");
// const res3 = display()(scheduleC);

console.log(res);
// console.log(res2);
// console.log(res3);
