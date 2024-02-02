/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(str){
    return str
        .split(' ')
        .join(' 😱 ')           // join - join together with ,
        .toUpperCase() + "!";
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))

/*
console.log("I'm out of coffee".split());        //split to sentence
console.log("I'm out of coffee".split(' '));     //split to words
console.log("I'm out of coffee".split(''));      //split to letters
console.log("I'm out of coffee".split().join()); 
console.log("I'm out of coffee".split().join('😱')); 
console.log("I'm out of coffee".split().join(' 😱 ').toUpperCase() + "!"); 
*/




/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(str){
    if (str.endsWith("!")) {
    return  "shh..." + str
       .slice(0, -1)       //(start, end) - slice from 0 to the (end-1)
       .toLowerCase();       
    }
    return "shh..." + str.toLowerCase();
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));



/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

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

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));







/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"

First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.slice(1);       //cut the first letter
}

/* Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? */ 

function toTitleCase(str){
    const sentenceArr = str.split(' ');     // split to words
    return sentenceArr.map (word => capitalizeWord(word)).join(' ');
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));









/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is:  

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!
 */


/*
 258786324 / 3 = 0  - vacation
 258786324 / 5 = 0  -  $100,000 bonus!
 258786324 / 3 &&  258786324 / 5 = 0  - JACKPOT! 1 Million and a Yacht!
 258786324 / 3 &&  258786324 / 5 != 0  - :(
*/

function awardBonuses(){
    // loop through 1 - 100
    for(let i = 1; i <= 100; i++){
        // is divisible by 3 & 5? 
        if(i % 15 === 0){
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

  









/*  Emojify!
Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 
*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/ 

function emojifyWord(word){
    // starts or ends with colon?
        // no: return word 
        if(!word.startsWith(":") && !word.endsWith(":")) return word; 
    
        // yes: remove colons 
        const slice = word.slice(1, - 1);        //or word.length-1 - last index of the word

        // exists in emoji object? 
        if(emojis[slice]){
            // yes: return emoji 
            return emojis[slice]
        } else {
            return slice;
        }  
    }


/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/ 



function emojifyPhrase(phrase){
    // split the passed in phrase into an array
    // map through the array and call emojifyWord() on each word in the phrase
    // join the array back together as a string, and return
    const newPhrase = phrase.split(" ").map(word => emojifyWord(word));
    console.log(newPhrase.join(" "));
}

console.log(emojifyWord(":heart:"));
//console.log(emojifyWord("elephant"));
//console.log(emojifyWord(":flower:"));
console.log(emojifyPhrase("I :heart: my :cat:")); //I 💜 my 🐱
console.log(emojifyPhrase("I :heart: my :elephant:"));  //I 💜 my elephant












/* 
Challenge: Is it an Anagram?
Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

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

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));









/* Decode an Alien Message - 
We Come in Peace!   
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are backward.
Write functions to reverse the backward messages so we can read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

// built in string methods 
function reverseString(str){
   // initialize a new empty string
   let reversedString = "";
   // loop through original string backwards, adding each character to the new string
   for (let i = str.length - 1; i >= 0; i--){
       reversedString += str[i];
   }
   return reversedString
}



/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
    return arr.map (item => reverseString(item));
}

console.log(reverseString(title));
console.log(reverseStringsInArray(messages));











/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/


// Solution 1: for loop 
function isPalindrome(str){
    // reverse the word using a backward for loop to create a new string
    let reverseStr = "";
    
    for(let i = str.length - 1; i >= 0; i--){
        reverseStr += str[i];
    }

    // compare the new string to the original word - are they equal? 
        // yes - return true
        // no - return false
    return reverseStr === str;
}


// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));








/*  
Save Grandpa's Password -
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    
}

console.log(removeDupeChars(password));









/* 
Frequency of Letters in Your Name -
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
// if the character is not the obj, add it, give it a value of 1
// if the character is in the object, add 1 to its value

    // initalize new empty object
    const count = {};
        // remove spaces and upercases
    const name = str.toLowerCase().split(' ').join('');

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

console.log(countChars("Shani Bider"));
console.log(countChars("Mississippi"));







/* Chef Mario's Recipe Book -
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
    // create a new arr to hold unique items 
    // for each item in recipe arr
    // if the item is NOT yet in the unique arr, push it in
    // if it is in the unique arr, move on to the next item (do nothing)
    // return the unique arr 
    const newArr=[];

    for (let i = 0; i < arr.length; i++) {      //or: arr.foreach(item => {...})
        // include need to go over all the array, not efficient
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }        
    }
    return newArr;
}
console.log(removeDupesFromArray(eggScrambleRecipe));


// Better solution
function removeDupesFromArray1(arr){
    // create a new object to keep track of duplicates 
    // use filter to loop thorugh each item in the arr
        // for each item in arr
            // look up the item in the lookup table
            // if the item does NOT exist in the lookup, add it and return true
        // return false

    const trackDupes = {};

    // create new array filled with elements that pass a test provided by a function.
    return arr.filter ( item => {
        if (!trackDupes[item]) {
            trackDupes[item] = true;
        }
        return false;
    });

}
console.log(removeDupesFromArray1(eggScrambleRecipe));


// Better solution
