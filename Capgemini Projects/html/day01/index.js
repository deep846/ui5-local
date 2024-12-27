


function check(){
    var x = []
    if(x){
        console.log("This is a truly value")
    }
    else{
        console.log('This is a faulty value');
        
    }
}

check();


let x = "5"
parseInt(x)

console.log(x+5)
console.log(parseInt(x)+5)


let y = 532

console.log(typeof(y));
console.log(y.toString());
console.log(typeof(y.toString()));



let ob = {
    name : 'Name',
    Salary : 123456789,
    Department : "IT",
    Role : "Software Engineer",
    call : function sum(x,y){
        return x+y
    }
}

console.log(ob.name);
console.log(ob.Department);
console.log(ob.Salary);
console.log(ob.call(1,2));



function sum(x,y){
    return x+y;
}

function sub(x,y){
    return x-y;
}

function mul(x,y){
    return x*y;
}

function div(x,y){
    return x/y;
}

let calc = {
    add : sum,
    sub : sub,
    mul : mul,
    div : div
}

let arr = [sum,sub,mul,div]


console.log(arr[0](2,717))



console.log(calc.add(10,21))

console.log(JSON.stringify(calc));  

let jsob = JSON.stringify(ob)   // converting js string into json string
console.log(JSON.stringify(ob));
console.log(JSON.parse(jsob))   // converting json string into js string



//  methodes for fix the values

var v = 18.98

console.log(v.toFixed())
console.log(v.toFixed(2))



//  String methodes


let str = 'Deep chouDHury'
let n = 'Deep'
let s = 'Choudhury'

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(n.concat(' ',s))
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.at(0));
console.log(str[2]);
console.log('Slice'+str.slice(1,4));  // Deep Choudhury
console.log(str.slice(4));  // Deep Choudhury
console.log(str.slice(-4));  // Deep Choudhury
console.log(str.slice(-4,-1));  // Deep Choudhury
console.log(str.substring(0,5));  // Deep Choudhury


let trim = '  hurry    !      '
console.log(trim.trim())
console.log(trim.trimStart())
console.log(trim.trimEnd())

let text = '5555'

console.log(text.padStart(4,0));
console.log(text.padEnd(5,0));
console.log(text.padEnd(5,'*'));
console.log(text.repeat(5));

let strng = 'Please visit xyz xyz xyz'

console.log(strng.replace('xyz','Capgemini'));
console.log(strng.replaceAll('xyz','Capgemini'));
console.log(strng.split(','));
console.log(strng.split(' '));









// json for js object notation

var json = {
    "name" : "Deep",
    "age"  : 23,
    "Gender" : "male",
    "Salary" : 400000,
    "address" : {
        "Street Name" : "I gate Road",
        "City" : "Bangalore",
        "Country": "India"
    },
    "Parent":[
        {
        "name" : "Debabrata Choudhury",
        "age" : "54",
        "gender" : "male"
        },
        {
        "name" : "Monika Choudhury",
        "age" : "45",
        "gender" : "female"
        }
    ],
    "Company":"Capgemini",
    "calcSqureRoot" : function (x){
            console.log(Math.sqrt(x));
            
    }
}


// accessing the complex json objects


console.log(json.name);
console.log(json.address.Country);
console.log(json.address);
console.log(json["address"]);
console.log(json.Parent[0].name);
console.log(json['Parent'][0]['name']);
console.log(json.Parent[1].name);
console.log(json.Company);
json.calcSqureRoot(4)



console.log(typeof(json))
console.log(json)
console.log(JSON.stringify(json))
console.log(JSON.parse(JSON.stringify(json)))




// Array and array methodes


let mix = [1, 'name', null, undefined, 1.4]
console.log(mix);
let xyz =  [...mix]

console.log(mix.length);
console.log(xyz.length);
console.log(xyz);

let abcd = new Array(1,2,3,4,5)     
console.log(abcd);

abcd.push(5)
console.log(abcd);
abcd.pop()
console.log(abcd)

abcd.unshift(2)
abcd.unshift(2)
console.log(abcd)


abcd.shift()
abcd.shift()
console.log(abcd)



console.log(abcd.concat(mix))

console.log(abcd.includes(1))
console.log(abcd.includes(10))
console.log(abcd.indexOf(1))
console.log(abcd.indexOf(2))
console.log(abcd.join('-'))
console.log(abcd.reverse());
console.log(abcd.sort());
console.log(abcd.sort());
abcd.splice(1,0,1.5);
console.log(abcd);
abcd.splice(1,2,'Deep')
console.log(abcd);



// loops

// for 
for(let i=0; i<abcd.length; i++){
    console.log(abcd[i]);
}

var i=0

    //while
while (i<3) {

    console.log(abcd[i]);
    i++;
}


i=0


    //do while
do {
    console.log(abcd[i])
} while (abcd.length>10);


// for each
console.log('..................................................');

abcd.forEach(element => {
        console.log(element);
});

console.log('..................................................');


abcd.forEach(function(element){
    console.log(element);
})






let num = [100,200,300]
let num1 = []

num.forEach(function(element){
    let x = element + ((element*10)/100)

    num1.push(x)

})


console.log(num1);




// salary hike



var det = [{
    name: 'Deep',
    Salary: 6000000
},{
    name: 'Sanjay',
    Salary: 5000000
},
{
    name: 'Raju',
    Salary: 4000000
},
{
    name: 'Bishal',
    Salary: 3000000
},
{
    name: 'Sumit',
    Salary: 2000000
},
]


var afilter = det.filter(function(item){
        if(item.Salary>3000000){
            return item
        }
})

console.log(afilter);

var neemp = []

afilter.filter(function(item){
    item.Salary = item.Salary + ((item.Salary*10)/100)
})

console.log(afilter);

let acopy = det.map(function(item){
    return item
})

let acopy1 = det.map(function(item){
    return {...item}
})
// acopy[0].Salary = 7000000000
acopy1[0].Salary = 7000000000
console.log(acopy);
console.log(acopy1);
console.log(det)
// console.log(acopy);







//  Advance Dom manupulation 



// creating appending and updating html element using various methode

let btn = document.getElementById('submit')


function imgchange(){
    let img = document.getElementById('imgid')
    // img.src= './5.png'
    img.style.display ='block'
    if(img.src.toString()==='http://127.0.0.1:5500/html/day01/1.png'){
        img.src = './5.png'
    }else{
        img.src = './1.png'
    }

    
    
    
}

btn.onclick = function(event){
    event.preventDefault();
    imgchange()
}


document.getElementById('fo').onsubmit = function(event){
    
    event.preventDefault()

    let name = document.getElementById('fo').name.value
    let pass = document.getElementById('fo').password.value
    let email = document.getElementById('email').value

    let ename = document.createElement('p')
        ename.innerText = name
        let epass = document.createElement('p')
        epass.innerText = pass
        let eemail = document.createElement('p')
        eemail.innerText = email
    if(name =='' || pass == '' || email == '' ){
            alert('Cound not submit all field are required')
    }else{

        document.getElementById('di').appendChild(ename)
          document.getElementById('di').appendChild(epass)
          document.getElementById('di').appendChild(eemail)

        document.getElementById('di').innerHTML += `<h1>${name}</h1> <br>
         <h1>${pass}</h1> <br>
          <h1>${email}</h1>`

          
    }
}


document.getElementById('btn').addEventListener('mousemove',random)


function random(){
    let xt =  Math.random();
    document.getElementById('di').innerHTML = `<p>${xt}</p>`
}

random();





//  creating html element and appending html elemnt

let che = document.createElement('p')
che.innerText = 'xyz'

let cimg = document.createElement('img')

cimg.src = './5.png'
cimg.style.width = '500px'

document.body.appendChild(che)
document.body.appendChild(cimg)


// deleting the html element


// cimg.src =''

document.getElementById('dlt').onclick = function(event){

    event.preventDefault();

    // document.getElementById('imgid').remove()

    document.getElementById('imgid').style.display = "none"

}







// adding and removing class
cimg.classList.add('sdfasdfasdfadfss')
cimg.classList.remove('sdfasdfasdfadfss')
cimg.id = 'cmgid'
cimg.alt = 'halla'
cimg.removeAttribute('id')
cimg.removeAttribute('class')
document.getElementById('imgid').classList.add('HAAAAAAAAAAAA')
document.getElementById('imgid').classList.remove('sdfasdfasdfadfss')





// Query selector

console.log(document.querySelector('span#sp').innerText)
// console.log(document.querySelectorAll('span').innerHTML = '<h1>Hello</h1>')
console.log(document.querySelector('span#sp').innerHTML = `<h1>55555555</h1>`)





//  promting

var amanname = prompt("What is your name")

console.log(amanname);



