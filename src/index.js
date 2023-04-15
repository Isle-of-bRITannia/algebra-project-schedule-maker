import { Schedule } from './schedules/api.js';
import { display } from './visualize/display.js';


// Long line of questions/thoughts
// should schedule be a class? 
// Should all the functions be defined in it? (i kinda don't think so but not sure)
// Where should schedule be defined? algebra or the api page?


// displaying it in a table code on the html page stuff goes here
// Jordan

const test = Schedule.create([
    {
        name: "classOG",
        startTime: 12,
        endTime: 15,
        day: "Monday",
        location: "MSS-1275",
        professor: "Travis",
    }], [
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
])

const res = display(test);

console.log(res);
