let now=new Date()
console.log(now);

console.log("year is:",now.getFullYear());
console.log("today date is : ",now.getDate())
//console.log(now.getTime())
console.log("time (hour) is : ",now.getHours())
console.log("time (minute) is : ",now.getMinutes())
console.log("time (second) is : ",now.getSeconds())

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log("day is : ", now.getDay())

console.log(days[now.getDay()])

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(months[now.getMonth()])


console.log(now.toTimeString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleString())

let getTime=()=>{
    let date=new Date()

    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    let period="AM"

    if(h>11){
        period="PM"

        if(h>12)
            h=h-12
    }

    h=(h<10) ? "0"+h :h
    m=(m<10) ? "0"+m :m
    s=(s<10) ? "0"+s :s

    let time=document.getElementById("time")
    time.innerText=`${h} : ${m} : ${s} ${period}`
}
getTime()

setInterval(getTime,1000)

