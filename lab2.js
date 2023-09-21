function isLeapYear (year){ //윤년
    //400의 배수는 윤년이다
    //4의배수 && 100의배수가 아니면 유녀ㄴ 
    //4와 100의 배수이면 윤년이아님 
    return (year % 100 != 0 || year % 400 == 0) && year % 4 == 0;
}

function getDayOfTheWeek(year, month, day, dist){
    
    let monthCode = {
        JAN : 1, 
        FEB : 4, 
        MAR : 4, 
        APR : 0, 
        MAY : 2, 
        JUN : 5,
        JUL : 0,
        AUG : 3,
        SEP : 6,
        OCT : 1,
        NOV : 4,
        DEC : 6
    };

    let dayArr = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

    const y = (year%100);
    let keyOfMonth = month.toUpperCase().substring(0,3);
    let step1 = Math.floor(y/12); //7
    let step2 = y-(step1*12); 
    let step3 = Math.floor(step2/4);
    let step4 = parseInt(day);
    let step5 = monthCode[keyOfMonth];
    
    if ((keyOfMonth == "JAN" || keyOfMonth == "FEB") && isLeapYear(year)) {
        step5 = (step5 - 1);
    }
    if (isLeapYear(year)) {
            if (year >= 1600 && year < 1700) {
                step5 = (step5 + 6);
            } else if (year >= 1700 && year < 1800) {
                step5 = (step5 + 4);
            } else if (year >= 1800 && year < 1900) {
                step5 = (step5 + 2);
            } else if (year >= 1900 && year < 2000) {
                step5 = (step5 + 0);
            } else if (year >= 2000 && year < 2100) {
                step5 = (step5 + 6);
            } else if (year >= 2100) {
                step5 = (step5 + 4);
            } 
     }

    let step6 = (step1 + step2 + step3 + step4 + step5)%7;
    //console.log(`(${step1} + ${step2} + ${step3} + ${step4}  + ${step5} )% 7 : ${step6}`);
    
     if(dist == "m") {
        //called by main.js
        return `${month} ${day}, ${year} ${dayArr[step6]}`;
        } else if (dist == "c") {
            //called by makeCalender
        return dayArr[step6];
        } else {
        return "0";
     }  
}



function makeCalendar(year) {
    const monthList = {
        'Jan':1,
        'Feb':2,
        'Mar':3, 
        'Apr':4, 
        'May':5, 
        'Jun':6, 
        'Jul':7, 
        'Aug':8, 
        'Sep':9, 
        'Oct':10, 
        'Nov':11, 
        'Dec':12
    };
    let fullDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            //index 0   1   2   3   4   5   6   7   8   9   10   11
            //month 1   2   3   4   5   6   7   8   9   10  11   12
     if(isLeapYear(year)) {
         fullDay[1] = fullDay[1]+1;
     };

    for(let [key, value] of Object.entries(monthList)) {
        for(let i=1; i<=fullDay[value-1];i++) {
           console.log( `${value}-${i}-${year} is a ${getDayOfTheWeek(year, key, i, "c")}`);
        }
    }
}
module.exports = { getDayOfTheWeek, isLeapYear, makeCalendar };