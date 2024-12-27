let x = [1,2,2,3,4,4,4,4,4,4,4,4,4,5,6,7]
let y = [1,2,2,3,4,5,6,7]




function counter(x){
    let eo = {}

x.forEach(element => {
    if(eo[element]){
        eo[element]++
    }else{
        eo[element] = 1
    }
});
console.log(eo);
}



function add(x,y){
    console.log(x+y);
    
}


add(1,2)
add(3,2)



// Q3


var dtr = 'Hello my name is deep and I am from INdia'
var vowel = ['a','e','i','o','u','A','E','I','O','U']
let ctr = 0;


function vwlcnt(str){
    var item = str.split('');
    item.forEach(element=>{
        if(vowel.includes(element)){
            ctr++;
        }
    })
    
    console.log('vowels are present in the string is : '+ctr);
}

function vwlcnt1(str){
    var fa = str.split('').filter(function(element){
        if(vowel.includes(element)){
            return element;
        }
    })

    console.log(fa.length);
     
}

function vwlcnt2(str){

    var cnt = 0;
    for (let i = 0; i < str.length; i++) {
        
        if(vowel.includes(str[i])){
            cnt++;
        }
    }

    console.log(cnt);
}

vwlcnt(dtr)
vwlcnt1(dtr)
vwlcnt2(dtr)







// Q4

var fruite = 'apple'
// var fruite = 'fasdfs'

switch (fruite) {
    case 'mango':
        console.log('I found the mango');
        break;
    case 'apple':
        console.log('I found the apple');
        break;
    case 'banana':
        console.log('I found the banana');
        break;

    default:
        console.log(`I not found the  ${fruite}`);
        break;
}




// Q5 regex


var regex = /c.t/
var check  = regex.test("This is a cat here which is arrested and cot")
console.log(check);

let ex = "cat cot cit is bot and hat is hot 10 and 20"
var check1 = ex.match(/c.t/g)  // checking charecter
var check2 = ex.match(/\d/g)
var check3 = ex.match(/\d+/g)
var check4 = ex.match(/^cat/g)

console.log(check1);
console.log(check2);
console.log(check3);
console.log(check4);


// let pass = 'Password1@';
// let pass = 'myp@ss1';
let pass = 'hello@World1';
// let pass = 'short@1';


let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@).{8,}$/

let res = reg.test(pass)

if(res=true){
    console.log("This is a valid strong password");
}
else{
    console.log("This is a weak password");
}







