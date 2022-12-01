function averageThreeNumbers(x, y, z) {
    let sum = x+y+z;
    let avg = sum/3;
    return avg;
}

function createSentence(num,noun){
    let sentence = 'On average, a Berkeley student has ' + num + ' ' + noun ;
    return sentence;
}

function getRandomNum(max){
    return Math.floor(Math.random() * (max - 0 + 1) + 0);

}


let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z)
let sentence = createSentence(avg,"books")
console.log(sentence);

