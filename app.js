// Madison Exercise

setTimeout(() => {
    const div1=document.querySelector(`#first`)
    const p1 = document.createElement(`p`)
    p1.innerText=`Hi`
    div1.append(p1)

    setTimeout(() => {
        const p2= document.querySelector(`timeout-nesting`)
        p2.innerText=`One`
        div1.append(p2)

        setTimeout(() => {
            const p3=document.querySelector(`timeout-nesting`)
            p3.innerText = `Two`
            div1.append(p3)
        }, 1000);
    }, 1000);
}, 1000);1


let time = 1
setInterval(() => {
   console.log(time); 
    time ++;
}, 1000);

const stop =document.querySelector(`button`)
stop.addEventListener(`click`, () =>{
    clearInterval(time)
})