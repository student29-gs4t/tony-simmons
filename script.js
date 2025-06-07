let name= "Gaby";
let age= 14;
let likeshushi= true;

function greeting(name) {
console.log("Hello",name);
}

greeting("Gaby");

function saveName(){
    let newName = document.getElementById("greeter").value;// text field value from user 
    document.getElementById("username").textContent=newName;  
    document.getElementById("greeter").value ="";  
}
