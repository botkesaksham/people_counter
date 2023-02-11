let count=0;
let countEl=document.getElementById("count")
let saveEL=document.getElementById("save-El")
function increment(){
    count=count+1;
    countEl.textContent=count
    console.log(count)
}

function decrement(){
    count=count-1;
    countEl.textContent=count
    console.log(count)
}

function save(){
    let countStr=count +" - "
    saveEL.textContent+=countStr
    countEl.textContent=0
    count=0
    console.log(count)


}
