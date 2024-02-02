











// filter - create new array filled with elements that pass a test provided by a function.
return arr.filter ( item => {
    if (!trackDupes[item]) {
        trackDupes[item] = true;
    }
    return false;
});







// array with all the duplicates removed
const newArr=[];
for (let i = 0; i < arr.length; i++) {      //or: arr.foreach(item => {...})
    // include need to go over all the array, not efficient
    if (!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }        
}
return newArr;      //['🥓 bacon','🍳 eggs','🫑 green peppers','🧀 cheese','🌶️ hot sauce','🥦 broccoli']






// an object
const count = {
    "s": 1,
    "h": 1,
};


// Frequency of Letters in Your Name -
function countChars(str){
    const count = {};   // initalize new empty object
    const name = str.toLowerCase().split(' ').join('');      // remove spaces and upercases
    
        // loop through the letters of the string
        for (let i=0; i<name.length; i++){
            if (count[name[i]]){
                count[name[i]]++;
            } else { 
                count[name[i]] = 1;
            }   
        }
        return count;
    }    
console.log(countChars("Shani Bider")); //{ s: 1, h: 1, a: 1, n: 1, i: 2, b: 1, d: 1, e: 1, r: 1 }




// making string in all caps with an exclamation point 
return str
.split(' ')                
.join(' 😱 ')             
.toUpperCase() + "!"
.slice(0, -1);       //(start, end) - slice from 0 to the (end-1)
console.log(panic("I'm almost out of coffee")); //I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!
console.log(panic("winter is coming"));//WINTER 😱 IS 😱 COMING!




console.log("I'm out of coffee".split());        //split to sentence
console.log("I'm out of coffee".split(' '));     //split to words
console.log("I'm out of coffee".split(''));      //split to letters - ['I', 'M'..]
console.log("I'm out of coffee".split().join());    //I'm out of coffee
console.log("I'm out of coffee".split().join('😱'));    //I'm😱out😱of😱coffee
console.log("I'm out of coffee".split().join(' 😱 ').toUpperCase() + "!");  // I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!




// add and change from string
function whisper(str){
    if (str.endsWith("!")) {
    return  "shh..." + str
       .slice(0, -1)       //(start, end) - slice from 0 to the (end-1)
       .toLowerCase();       
    }
    return "shh..." + str.toLowerCase();
}
console.log(whisper("PLEASE STOP SHOUTING."));//shh...please stop shouting.




// Alternating Caps 
function altCaps(str){
    let newStr = '';
    for (let i=0; i<str.length; i++){
        if (i%2 == 0){
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i];
        }  
    }
    return newStr;
}
console.log(altCaps("When you visit")); //WhEn yOu vIsIt 





// capitalize every word
return word[0].toUpperCase() + word.slice(1); //Pumpkin

function toTitleCase(str){
    const sentenceArr = str.split(' ');     // split to words
    return sentenceArr.map (word => capitalizeWord(word)).join(' ');
}
console.log(toTitleCase("pumpkin pranced purposefully across the pond")); //Pumpkin Pranced Purposefully Across The Pond




// Another FizzBuzz 
function awardBonuses(){
    for(let i = 1; i <= 100; i++){    // loop through 1 - 100
        if(i % 15 === 0){        // is divisible by 3 & 5? 
            console.log(`${i} - JACKPOT! 1 Million and a Yacht!`);          // console.log ( '${i} - JACKPOT! 1 Million and a Yacht!') - is Wrong.
        } else if(i % 3 === 0){
            console.log(`${i} - Vacation!`);
        } else if(i % 5 === 0){
            console.log(`${i} - $100,000 bonus!`);
        } else {
            console.log(`${i} - :(`);
        }        
    }
}
awardBonuses();
/*1 - :(
  2 - :(
  3 - Vacation! ... */






// detect a specific word and replace it with an emoji. 
  const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

function emojifyWord(word){
    // starts or ends with colon? no: return word 
        if(!word.startsWith(":") && !word.endsWith(":")) return word; 
        // yes: remove colons 
        const slice = word.slice(1, - 1);        //instead of -1 can write: word.length-1 - last index of the word
        // exists in emoji object? 
        if(emojis[slice]){
            return emojis[slice]     // yes: return emoji 
        } else {
            return slice;
        }  
    }

function emojifyPhrase(phrase){
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    console.log(newPhrase.join(" "));
}

console.log(emojifyWord(":heart:")); //💜
console.log(emojifyPhrase("I :heart: my :cat:")); //I 💜 my 🐱







// Is it an Anagram? (groups of words that can be spelled with the same letters). 
function isAnagram(str1, str2){
    if (str1.length === str2.length){
        if (str1.split('').sort().join('') === str2.split('').sort().join('')){
            return true;
        } else {
            return false;
        }
    }
    else
    return false;
}
console.log(isAnagram("allergy", "gallery")); //true
console.log(isAnagram("treasure", "measure")); //false









// reverse the backward messages
const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]


// built in string methods 
function reverseString(str){
   let reversedString = "";   // initialize a new empty string
   // loop through original string backwards, adding each character to the new string
   for (let i = str.length - 1; i >= 0; i--){
       reversedString += str[i];
   }
   return reversedString
}

function reverseStringsInArray(arr){
    return arr.map (item => reverseString(item));
}
console.log(reverseString(title)); //Stuff to do on Earth:
console.log(reverseStringsInArray(messages));
/*
[
  'Try ice cream',
  'Visit Eiffel Tower',
  'Relocate humans to the moon',
  'Put cats in charge'
]
*/










// Palindromes
function isPalindrome(str){
    // reverse the word using a backward for loop to create a new string
    let reverseStr = "";    
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    // compare the new string to the original, eqal ? return true, no: return false
    return reverseStr === str;
}










   


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
