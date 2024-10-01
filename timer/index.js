const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counter-timer");
const container = document.querySelector(".container")

//converting seconds,minutes,hours,days in milliseconds
const second = 1000,
minute = 60*second,
hour = 60*minute,
day = 24*hour;


const getTime = () => {

    //generating current date in mm/dd/yyyy format
    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()+1).padStart(2,"0"),
    yyyy = now.getFullYear();
    now = `${mm}/${dd}/${yyyy}`;

   //taking target date from user
    let enterDay = prompt("Enter Day (1-31)").padStart(2,"0");
    while(enterDay>31 || enterDay<1)
        {
            enterDay = prompt("Invalid day. Enter again").padStart(2,"0");
        }

    let enterMonth =  prompt("Enter month(1-12)").padStart(2,"0");
    while(enterMonth>12 || enterMonth<1)
        {
            enterMonth = prompt("Invalid month. Enter again").padStart(2,"0");
        }

    
    //checking if date is for this year or next year
    let targetDate= `${enterMonth}/${enterDay}/${yyyy}`;

    if(now > targetDate)
    {
        targetDate = `${enterMonth}/${enterDay}/${yyyy + 1}`;
        
    }
    
    const intervalID = setInterval(
    () => {
        //converting target and current date in milliseconds
        const target = new Date(targetDate).getTime();
        const today = new Date().getTime();
       
        const difference = target-today;  //difference between target and today

       console.log(difference);

       //if target is reached i.e when today==target
        if(difference<0)
        {
            counterTimer.style.display = "none"; //remove timer
            
            //showing times up image
            const image = document.createElement("img"); 
            image.src = "timeup.png";
            image.setAttribute("class","image");
            container.append(image);

            heading.innerText = "TIME'S UP"; //heading change

            clearInterval(intervalID); //clearing setInterval
         }
        
        //finding left time upto target -- days,hours,minutes,seconds
        const leftDays = Math.floor(difference/day);
        const leftHours = Math.floor((difference % day)/hour);
        const leftMinutes = Math.floor((difference%hour)/minute);
        const leftSeconds = Math.floor((difference%minute)/second);

        //showing timer in dom
        daysElement.innerText = leftDays;
        hoursElement.innerText = leftHours;
        minutesElement.innerText = leftMinutes;
        secondsElement.innerText = leftSeconds;
       
    },0
)};

getTime();