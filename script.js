/*alert("test");*/
function addNewAQField() {

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("acqField");
newNode.classList.add('mt-2'); 
newNode.setAttribute("rows", 2);
newNode.setAttribute("placeholder", "Enter here");

let aqOb = document.getElementById("aq");
let aqAdButtonOb = document.getElementById("aqAdButton");

aqOb.insertBefore(newNode,aqAdButtonOb);
}

function addNewWEField(){

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("WorField");
newNode.classList.add('mt-2'); 
newNode.setAttribute("rows", 2);
newNode.setAttribute("placeholder", "Enter here");

let weOb = document.getElementById("we");
let weAdButtonOb = document.getElementById("weAdButton");

weOb.insertBefore(newNode,weAdButtonOb);
}

function addNewSKField(){

    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skiField");
    newNode.classList.add('mt-2'); 
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");
    
    let skiOb = document.getElementById("ski");
    let skiAdButtonOb = document.getElementById("skiAdButton");
    
    skiOb.insertBefore(newNode,skiAdButtonOb);
}

function addNewLanButton(){

let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("lanField");
newNode.classList.add('mt-2'); 
newNode.setAttribute("rows", 2);
newNode.setAttribute("placeholder", "Enter here");

let lanOb = document.getElementById("lan");
let lanAdButtonOb = document.getElementById("LanAdButton");

lanOb.insertBefore(newNode,lanAdButtonOb);
}

function generateCV(){
    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;


    let DField=document.getElementById('DField').value;

    let dobT=document.getElementById('dobT');
    dobT.innerHTML=DField;

    //contact
    document.getElementById("numT").innerHTML=document.getElementById("phoneField").value;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("adField").value;
    document.getElementById("cityT").innerHTML=document.getElementById("citField").value;
    document.getElementById("StateT").innerHTML=document.getElementById("stField").value;

    //email
    document.getElementById("emT").innerHTML=document.getElementById("emailField").value;

    //fb
    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;

    //linkdin
    document.getElementById("linkT").innerHTML=document.getElementById("linkinField").value;

    //academic Qualification
    let acdq=document.getElementsByClassName('acqField')
    let str=''

    for(let e of acdq){
        str=str+`<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML=str;

    //work exp
    let wrp=document.getElementsByClassName('WorField')
    let str1=''

    for(let e of wrp){
        str1=str1+`<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML=str1;

    //skills
    let skp=document.getElementsByClassName('skiField')
    let str2=''

    for(let e of skp){
        str2=str2+`<li> ${e.value} </li>`;
    }

    document.getElementById('skiT').innerHTML=str2;

    //languages

    let lap=document.getElementsByClassName('lanField')
    let str3=''

    for(let e of lap){
        str3=str3+`<li> ${e.value} </li>`;
    }

    document.getElementById('lanT').innerHTML=str3;
    // image fetch
    let file=document.getElementById('imageField').files[0];
    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    //set image
    reader.onloadend=function(){
        document.getElementById("imgT").src=reader.result;
    }
    //generate cv

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}
//print CV
function printCV(){
    window.print();
}