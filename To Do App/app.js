let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let li = document.querySelector("li");
let i = document.querySelector("i");




btn1.addEventListener("click",function(){
    let newLi = document.createElement("li");
    newLi.innerText=input.value;

    let del = document.createElement("i");
    del.setAttribute("class","fa-solid fa-trash-can");
    newLi.appendChild(del);

    ul.appendChild(newLi);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "I"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

btn2.addEventListener("click",function(){
    ul.removeChild(ul.lastElementChild);
});


btn3.addEventListener("click",function(){
    ul.innerHTML = "";
});
