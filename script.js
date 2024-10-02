let inputbox=document.getElementById("boxfield")
let ul_list=document.getElementById("list-container")
function btntask(){
    
    if(inputbox.value === '' || inputbox.value===" "){
        alert("you must write something!")
    }else {
        let li=document.createElement('li')
        ul_list.append(li)
        li.innerHTML=inputbox.value
        let span =document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
        // li.addEventListener("click",()=>{
        //     li.classList.toggle("checked")
            
            
        // })
        savedata()
    }
    inputbox.value=""
    

}
// ul_list.addEventListener("click",(oo)=>{
//     ul_list.classList.toggle("checked")
//     if(oo.target=== "LI"){
//         oo.target.to
//     }
    
    
// })
// ul_list.addEventListener("click", function(e){

//     if(e.target.tagName === "LI"){
    
//     e.target.classList.toggle("checked");
    
//     }
    
//     else if(e.target.tagName === "SPAN"){
    
//     e.target .parentElement. remove ();
//     }
    
//     });

ul_list.addEventListener("click", (e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        savedata()
    }else if(e.target.tagName ==="SPAN") {
        e.target.parentElement.remove()
        savedata()

    }
})

function savedata(){
    localStorage.setItem("data",ul_list.innerHTML)
}
function shtask(){
    ul_list.innerHTML=localStorage.getItem("data")
}
shtask()