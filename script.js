//Two arguments, key and value
//localStorage.setItem("name", "steve");

//Remove item, write the key
//localStorage.removeItem("name")
//console.log(localStorage);

//Key value in console
//localStorage.setItem("age", "30");
//localStorage.setItem("name", "steve")
//console.log(localStorage.getItem("age"));
//Hämta key, går i 0,1,2,3 osv
//console.log(localStorage.key(1));

const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpValue");
const btnInsert = document.getElementById("btnInsert");
const lsOutput = document.getElementById("lsOutput");

btnInsert.onclick = function (){
    const key = inpKey.value;
    const value = inpValue.value;

    console.log(key);
    console.log(value);

    if (key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
};

for (let i = 0; i  < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    lsOutput.innerHTML += `${key}: ${value} <br>`;
};
