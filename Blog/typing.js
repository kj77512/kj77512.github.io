
/*** 
const elemSpan= document.querySelector('.home span');
const strData="Web Publisher";
const content=strData.split('');
console.log(content);
let textIdx=0;
elemSpan.textContent="";

/****타이핑효과 중 글자 삭제 */
/***
const deleteText=()=>{
    textIdx--;
    content.pop();
    console.log(content);
    elemSpan.textContent=content.join('');

    if(textIdx >=1){
        setTimeout(deleteText, 500);
    }
}

const addText=()=>{

let text = content[textIdx];
textIdx++;
// console.log(text);
elemSpan.textContent += text;
if(textIdx < content.length){
    setTimeout(addText, 500)
    } else{

    setTimeout(deleteText,1000);
    }
}
addText();  */


const elemSpan= document.querySelector('.home span');
const strData=["Web Publisher", "Front-End Developer","Web UX Disigner"];
let content=''; /** 글자가 하나씩 지워지는 것(아래에 있음)*/
let currentIdx=0; /** 문장(배열의 인덱스값) */
let textIdx=0;    /** 낱글자 하나하나의 인덱스 값 */


/****타이핑효과 중 글자 삭제 */
const deleteText=()=>{
    textIdx--;
    content.pop(); /****pop:제일 뒤에 있는 글자들을 하나씩 지워줌 */
    console.log(content);
    elemSpan.textContent=content.join('');

    if(textIdx >=1){
        setTimeout(deleteText, 500);
    }else{
        currentIdx++;
        if(currentIdx > 2){
            currentIdx=0;
        }
        setTimeout(init,2000);
    }
}

const addText=()=>{

let text = content[textIdx];
textIdx++;
// console.log(text);
elemSpan.textContent += text;
if(textIdx < content.length){
    setTimeout(addText, 500)
    } else{

    setTimeout(deleteText,1000);
    }
}

const init=()=>{
    content =strData[currentIdx].split('');
    elemSpan.textContent="";
    addText();
}

init();