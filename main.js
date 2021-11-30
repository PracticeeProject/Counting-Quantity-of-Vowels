
const vowels = ["A","E","I","O","U","a","e","i","o","u"];

function countingVowels(sentence){
    let count = 0;
    let letters = Array.from(sentence);

    letters.forEach(myfunction);

    function myfunction(value){
        if(vowels.includes(value)){
            count++;
        }
    }

    return count;

}

console.log(countingVowels("I Love Bangladesh and It's People"));
