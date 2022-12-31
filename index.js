#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.clear();

const answerCallback =  (answer) => {
    if (answer === 'Y') {
        console.log('감사');
        rl.close();
    } else if (answer === 'N') {
        console.log('죄송');
        rl.close();
    } else {
        console.clear();
        console.log('y 또는 n 만 입력합니다.');
        rl.question('예저가 ?? (Y/N) ', answerCallback);
    }
}

rl.question('예저가 ?? (Y/N) ', answerCallback);



// console.log('Hello CLI', process.argv);
