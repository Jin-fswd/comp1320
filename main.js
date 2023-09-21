const lab2 = require("./lab2.js");
const readline = require("readline-sync");

//test---------------------------------------
//console.log(lab2.getDayOfTheWeek(1989,"August",16));
//console.log(lab2.getDayOfTheWeek(1950,"March",20));
//console.log(lab2.getDayOfTheWeek(1992,"Feb",29,'m'));
//-------------------------------------------
const question = readline.question("get dat of week = 1, make calendar(2019) = 2    : ");
if (question == 1) {
    const year = readline.question("Enter a year : ");
    const month = readline.question("Enter a month : ");
    const date = readline.question("Enter a date : ");
    console.log(lab2.getDayOfTheWeek(year,month,date, "m"));
} else if (question == 2) {
    lab2.makeCalendar(2019);
} else {
    console.log("failed");
}
