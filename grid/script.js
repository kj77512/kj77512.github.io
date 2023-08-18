//객체 가져오기//
// const elemMenuList = document.querySelector('nav');
const elemMenuList = document.querySelectorAll('nav>ul>li>a');
const elemIcon = document.querySelector('.menu-icon');
const elemMenuBar=document.querySelector('nav');
const elemSection=document.querySelectorAll('section');
const elemMain=document.querySelector('main');





const viewSection=(obj)=>{
    if(obj.id){
       //모든 section에서 class를 삭제
       elemSection.forEach((value)=>{
        value.classList.remove('viewOn');
       });
       //선택한 메뉴의 section이 보이도록 class=viewOn을 추가
       elemSection[Number(obj.id)].classList.add('viewOn');
       
    }
}


//메뉴 리스트에서 클릭을 하면 실행되는 함수

const onClickMenu=(event)=>{

    //menubar의 class=menu-off가 추가 되도록
    
    elemMenuBar.classList.toggle('menu-off');
    elemIcon.classList.toggle('icon-on');
    elemMain.classList.toggle('mainOn')
    viewSection(event.target);
}



const Init =()=>{

    //처음 시작 함수

    elemMenuList.forEach((value)=>{
        value.addEventListener('click',onClickMenu)
    });
    elemIcon.addEventListener('click',onClickMenu);

}


Init();


