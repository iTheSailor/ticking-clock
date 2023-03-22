function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
    new Date().getMinutes() * 60 + 
    new Date().getHours() * 3600;
}
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    let rotationangle = 6
    var xhour = (time %43200 /3600)*30 - 180
    var xminutes = parseInt((time % 3600 / 60)*rotationangle-180)
    var xseconds = parseInt((time % 3600 % 60) *rotationangle-180)
    hour.style.transform =`rotate(${xhour}deg)`
    minutes.style.transform =`rotate(${xminutes}deg)`
    seconds.style.transform=`rotate(${xseconds}deg)`
}
, 1000);
// function timer(){
    //     var time = getSecondsSinceStartOfDay();
    //     var xhour = parseInt(time/3600)*rotationangle
    //     var xminutes = parseInt(time % 3600 / 60)*rotationangle
    //     var xseconds = (time % 3600 % 60) *rotationangle
    //     console.log(xhour)
    //     console.log(xminutes)
    //     console.log(xseconds)
    //     hourE.style.transform ='rotate({xhour}deg)'
    //     minE.style.transform = 'rotate({xminutes}deg)'
    //     secE.style.transform = 'rotate({xseconds}deg)'
    // }
    
    
    
    
    // const hourE = document.querySelector("#hour");
    // const minE = document.getElementById("minutes");
    // const secE = document.getElementById("seconds");
// let hour,minutes,seconds = document.querySelector("#hour","#minutes","#seconds")
// let timeparsed=[parseInt(time/3600),parseInt(time % 3600 / 60),(time % 3600 % 60)]
// console.log(timeparsed)
// hour.style.transform.rotate *= timeparsed[0]  
// minutes = parseInt(time % 3600 / 60)
// seconds = (time % 3600 % 60)
// seconds.style.transform 






// setInterval( function() {
//     var time = getSecondsSinceStartOfDay();
//     console.log(time);
// }, 1000);

// setInterval( function() {  <---------------figuring out digital clock
//     var time = getSecondsSinceStartOfDay();
//     console.log(time);
//     let timeparsed=[hour,minutes,seconds]
//     console.log(timeparsed)
// }, 1000);