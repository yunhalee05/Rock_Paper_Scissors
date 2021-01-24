let userScore = 0;/*얘네는 게임의 결과에 따라서 변하는 값이라서 let으로 둔다 */
let computerScore = 0;
const userScore_span = document.getElementById("user-score");/* variables  span tag라고 알려주는 것이다. */ 
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");/*클래스 쿼리 셀렉터 */
const result_p = document.querySelector(".result > p"); /*result 안의 p tag를 변경할 것이다. */
const rock_div = document.getElementById("r");/*id 파트 Getelementbyid */
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);/*0~2까지 숫자 랜덤으로(정수로) 추출*/
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter ==="r") return "ROCK";
    if(letter ==="r") return "PAPER";
    return "SCISSORS"
}

function win(user,computer){
    const smallUserWord = "user".fontsize(3).sup();/*sup은 맨 위로 올리자는 것 */
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);/*결과에 따라서 불빛을 줄것이다. */
    userScore++;
    userScore_span.innerHTML = userScore; /*점수 업데이트*/
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!🔥`; /*es6문법이다 */

    userChoice_div.classList.add('green-glow'); /*이겼을때는 그린색 빛을 주고 싶다) 그리고 시간이 지나면 원래대로 하얗게 돌아오도록 할거다 -> settimeout*/
    setTimeout(() => userChoice_div.classList.remove('green-glow'),500);

}


function lose(user, computer){
    const smallUserWord = "user".fontsize(3).sup();/*sup은 맨 위로 올리자는 것 */
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);/*결과에 따라서 불빛을 줄것이다. */
    computerScore++;
    userScore_span.innerHTML = userScore; /*점수 업데이트*/
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(computer)}${smallUserWord}. You lose!💩`; 

    userChoice_div.classList.add('red-glow'); /*졌을때는 빨간색 빛을 주고 싶다) 그리고 시간이 지나면 원래대로 하얗게 돌아오도록 할거다 -> settimeout*/
    setTimeout(() =>  userChoice_div.classList.remove('red-glow') ,500);
}

function draw(user, computer){
    const smallUserWord = "user".fontsize(3).sup();/*sup은 맨 위로 올리자는 것 */
    const smallCompWord = "comp".fontsize(3).sup();
    const userChoice_div = document.getElementById(user);/*결과에 따라서 불빛을 줄것이다. */

    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} is equal to ${convertToWord(computer)}${smallCompWord}. It was draw!🤟`; 

    userChoice_div.classList.add('gray-glow'); /*비겼을때는 회색 빛을 주고 싶다) 그리고 시간이 지나면 원래대로 하얗게 돌아오도록 할거다 -> settimeout*/
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') },500);   /*람다식으로 하면 화살표 추가하고 함수 지우고 {}지워서 한줄에 표현 가능 */
}
    

function game(userChoice) {
    const computerChoice = getComputerChoice();/*game이 호출될 때마다 컴퓨터에서 랜덤으로 불러낼 것이다. */
    switch(userChoice + computerChoice){ /*둘다 문자다 */
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){


    /*버튼을 눌렀을 떄 이벤트를 알려준다.  */
    rock_div.addEventListener('click',() => game("r")); /*얘도 람다식으로 바꾼 것 */

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissors_div.addEventListener('click',function(){
        game("s");
    })

}


main();
