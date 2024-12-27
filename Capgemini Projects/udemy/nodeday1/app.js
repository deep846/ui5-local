const fs = require('node:fs');
const validator = require('validator')



// let id = document.getElementById('id').value
// let name = document.getElementById('name').value
// let roll = document.getElementById('roll').value


// let jdata = {}


// document.getElementById('create').onclick = function (event) {
//     event.preventDefault()

//     if(id=='' || name=='' || roll==''){
//         alert('Please fill all the field')
//     }
//     else{
//         jdata = {
//             id : id,
//             name : name,
//             Roll : roll
//         }

//         adding(jdata)
//     }

// }



let jdata = {
    id : 1,
    name : "Deep",
    Roll : 14
}


function adding(dat){
    let data = fs.readFileSync('./live.json')
    let jsdata = JSON.parse(data)
    if(dat.id<=jsdata.length){
        console.log(`${dat.id} is already exist`);  
    }
    else{
        jsdata.push(dat)
        fs.writeFileSync('./live.json',JSON.stringify(jsdata))
    }

}

function deleting(index){
    let data = fs.readFileSync('./live.json')
    let jsdata = JSON.parse(data)
    if(jsdata[index-1].id == undefined){
        console.log('This id is not exist');  
    }
    else{
    jsdata[index-1] = {}
    fs.writeFileSync('./live.json',JSON.stringify(jsdata))
    }
    
}

function read(index){
    let data = fs.readFileSync('./live.json')
    let jsdata = JSON.parse(data)
    if(jsdata[index-1].id == undefined){
        console.log('This id is not exist');  
    }
    else{
        console.log(jsdata[index-1]);
    }
}

function updating(index){

    let jdata = {
        name : "Sananda",
        Roll : 11
    }

    let data = fs.readFileSync('./live.json')
    let jsdata = JSON.parse(data)
    if(jsdata[index-1].id == undefined){
        console.log('This id is not exist');  
    }
    else{
        jsdata[index-1].name = jdata.name;
    jsdata[index-1].Roll = jdata.Roll;
    fs.writeFileSync('./live.json',JSON.stringify(jsdata))
    }
    
}

// adding(jdata)
// deleting(0)
// read(2)
// updating(2),



//  3rd party module use

console.log(validator.isEmail('dee@email.com'));
console.log(validator.isAlphanumeric('ab23123'));
console.log(validator.isAlpha('asdfasdf1312121'));








