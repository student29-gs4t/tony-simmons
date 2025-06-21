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


document.querySelectorAll('.accordion-header').forEach(function(button){
    button.addEventListener('click', function() { 
    let content = this.nextElementSibling;
    content.style.display = (content.style.display=== 'block') ? 'none' : 'block' ;
    });
});
const PASSWORD ="lifeisfun";
function validatepass() {
    const login = document.getElementById('password');
    const message = document.getElementById('message'); 
    const hiddenEntries = document.querySelectorAll('.hidden');
  


    if (login.value === PASSWORD) { 
        message.textContent= 'password confirmed see hidden entries below.';
        hiddenEntries.forEach(function(entry) { entry.style.display ='flex';});    
    } else { 
        hiddenEntries.forEach(function(entry) { entry.style.display ='none';});
        message.textContent= 'password denied. try again.';
    }
    
    login.value = '';
}

