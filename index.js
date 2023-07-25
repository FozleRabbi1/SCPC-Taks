
// Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)
// Write a code to calculate if the string is palindrome ? (Use javascript only)
// Explain what a callback function is and provide a simple example? 


//=========================>>>>>>>> Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)
const vaulesConsonentCount = (string) =>{
    // console.log(string)
    string = string.toLowerCase();

    let numberOfVowels = 0;
    let numberOfConsonent = 0;

    for(const char of string){
        if("aeiou".includes(char)){
            numberOfVowels++
        }
        else if(/[a-z]/.test(char)){
            numberOfConsonent++
        }
    }

    return {numberOfVowels, numberOfConsonent}
}

const string = "hello , world";

const {numberOfVowels, numberOfConsonent} = vaulesConsonentCount(string);
// console.log("vowel == ", numberOfVowels)
// console.log("consonent == ", numberOfConsonent)




//=================== Write a code to calculate if the string is palindrome ? (Use javascript only)
let value = "madam";
// let value = 121;
const palindromeFun = () =>{
    let reverseValue = value.toString().split("").reverse().join("");
    let mainValue = value.toString();
    if(reverseValue == mainValue){
        console.log("It is a Palindorm")
    }
    else{
        console.log("It is Not a palindrom")
    }
}

palindromeFun();
  


// Explain what a callback function is and provide a simple example? 

function square (a) {
    console.log(`Square Number = ${a} : ${a * a} `)
}

function haireOrderFunctio (num, callback) {
    callback(num)
}

haireOrderFunctio(6, square)

