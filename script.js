
let submitButton = document.querySelector(".button-img"); 
let inputDay = document.querySelector(".inday")
let inputMonth = document.querySelector(".inmonth")
let inputYear = document.querySelector(".inyear")

let resDay = document.querySelector(".day")
let resMonth = document.querySelector(".month")  
let resYear = document.querySelector(".year") 

const currdate = new Date();


var currYear = currdate.getFullYear() 
var currMonth = currdate.getMonth() + 1 
var currDay = parseInt(currdate.toDateString().split(" ")[2]) 
let months = [31, // January
  28, // February (29 in leap years)
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31  // December
    ]   

    
function computeMonths(month) { 
    let limit = month-1 
    let total = 0; 

    if(month == 1) { 
        return 0 
    }
    if(month == 12) { 
        return 334
    }
    for(let i = 0; i <= 12; i++) { 
        total+=months[i] 
        if(i == limit-1) {
            return total
        }
    }

}

function getMonths(days) { 
    let track= 0; 
    let mc = 0; 
    while(days - months[track] > 0 ) { 
        days-=months[track]
        mc+=1; 
    
    }

    return [mc, days] 
 }

submitButton.addEventListener("click",()=>{ 
    let totalYears = currYear - inputYear.value

    let userTotalMonths = computeMonths(inputMonth.value) + inputDay.value 
    let currentTotalMonths = computeMonths(currMonth) + currDay 
    if(userTotalMonths < currentTotalMonths) { 
       
        let diffMonths =  getMonths(currentTotalMonths - userTotalMonths)[0] 
        let remain = getMonths(currentTotalMonths - userTotalMonths)[1] 

        console.log(diffMonths, remain)
    }

    
    

    


    resYear.innerHTML = totalYears
})


/**
submitButton.addEventListener("click" ,()=>{ 
    //USER INPUT 
    
    let userYears = ((currYear - inputYear.value) * 365) - 365
    let userMonths = computeMonths(inputMonth.value -1) - months[inputMonth.value-1]
    let userTotal = (userYears / 365) + (userMonths + inputDay.value)
    console.log(userYears / 365)
  

    const startDateObj = new Date(inputYear.value + "-" + inputMonth.value + "-" + inputDay.value );
    const endDateObj = new Date(currYear + "-" +currMonth + "-" + currDay );

    // Calculate the time difference in milliseconds
    const timeDifference = endDateObj - startDateObj;

    // Calculate the number of milliseconds in a day, month, and year
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const millisecondsInMonth = 30 * millisecondsInDay; // Assuming an average month length
    const millisecondsInYear = 365 * millisecondsInDay; // Assuming a non-leap year

    // Calculate the total number of years, months, and days
    const years = Math.floor(timeDifference / millisecondsInYear);
    const months = Math.floor((timeDifference % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor(((timeDifference % millisecondsInYear) % millisecondsInMonth) / millisecondsInDay);

    resYear.innerHTML = years
    resMonth.innerHTML = months
    resDay.innerHTML = days



   
})
*/
/***
let yearInMonthsA = currYear * 365
    let yearInMonthsB = inputYear.value * 365
    let yearCount = 0
    let monthCount = 0 
    
    let daysDiff = yearInMonthsA - yearInMonthsB  
    while(daysDiff - 365 >= 0){
        yearCount+=1 
        daysDiff -= 365
     }
   
     if(currMonth > inputMonth.value) { 
        monthCount = currMonth - inputMonth.value

     } 
    resYear.innerHTML = yearCount
    resMonth.innerHTML = monthCount */
