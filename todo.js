let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){ // on clicking enter
        let item = document.createElement("li");//for new item from placeholder
        item.innerText = inp.value; //same as input

        let delBtn = document.createElement("button"); // inserting delet btn for new items
        delBtn.innerText = "X";
        delBtn.classList.add("delete");

        item.appendChild(delBtn); // adding delBtn to the new item 
        ul.appendChild(item); // making the item from placeholder append to list 
        inp.value = "" ; // empty the placeholder afte enter
        // console.log("entered and added");
    }
});

btn.addEventListener("click", function(){ //same as above for clicking the button
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

ul.addEventListener("click", function (event) { // delete item from list by clicking on X
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove(); 
        console.log("DELETED");
    }
});
