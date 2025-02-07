let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')




let p1sum = 0
let p2sum = 0
let anss = document.querySelector(".ans1");
const container = document.querySelector(".dice_pic");
const val = document.getElementById("dice");

const specialTiles = {
    5:[ { question: "What is the sum of -5 and 8?", answer: "3", consequence: -2 },
        { question: "What is the sum of -5 and 5?", answer: "0", consequence: -2 },
        { question: "What is the sum of -1 and 8?", answer: "7", consequence: -2 },
        { question: "What is the sum of -10 and -12?", answer: "-22", consequence: -2 },
        { question: "What is the sum of -9 and -4?", answer: "-13", consequence: -2 },
        { question: "What is the sum of -13 and 19?", answer: "6", consequence: -2 },
        { question: "What is the sum of 10 and -20?", answer: "-10", consequence: -2 }
    ],

    10:[ { question: "Which integer is greater: -4 or -9??", answer: "-4", consequence: -3 },
        { question: "Which integer is greater: -20 or 1?", answer: "1", consequence: -3 },
        { question: "Which integer is greater: -19 or -29?", answer: "-19", consequence: -3 },
        { question: "Which integer is greater: 25 or 9?", answer: "9", consequence: -3 },
        { question: "Which integer is greater than -15: 11 or -23?", answer: "11", consequence: -3 },
        { question: "Which integer is greater than -5: 4 or -6?", answer: "4", consequence: -3 }

    ],
    8: [{ question: "What is the product of -3 and -7?", answer: "21", consequence: -5 },
        { question: "What is the product of -3 and 3?", answer: "-9", consequence: -5 },
        { question: "What is the product of 100000 and 0?", answer: "0", consequence: -5 }
    ]
    
};

function getRandomQuestion(tile) {
    if (specialTiles[tile]) {
        return specialTiles[tile][Math.floor(Math.random() * specialTiles[tile].length)];
    }
    return null;
}
function play(player, psum, correction, num) {
    let sum
    
    const negativeTiles = {
        6: { question: "Negative tiles! -3", answer: "8x", consequence: -3 },
        11: { question: "Negative tiles! -3", answer: "8x", consequence: -3 }
    };
    const positiveTiles = {
        4: { question: "Positive tiles! +10", answer: "8x", consequence: 10 }
    };

   
   
    
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
            // sum = p1sum
        }

        
        if (p1sum == 4) {
            
        }

        if (p1sum == 6) {
              
        }
       
        
    

        let specialQuestion = getRandomQuestion(p1sum);
        if (specialQuestion) {
            document.querySelector(".Q1").style.display = "inline-block";
            document.querySelector(".Q1 h1").innerText = specialQuestion.question;
            document.getElementById("submit1").onclick = function () {
                let userAnswer = document.querySelector(".ans1").value;
                if (userAnswer === specialQuestion.answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".Q1").style.display = "none";
                  
                    return;
                } else {
                    if (psum === 'p1sum') p1sum += specialQuestion.consequence;
                   
                    alert("Incorrect! Moving back.");
                    
                }
                document.querySelector(".Q1").style.display = "none";
                document.querySelector(".ans1").value = '';
                play("p1", "p1sum", 0, 0);
            };
        }
        if (negativeTiles[p1sum]) {
            document.querySelector(".N1").style.display = "inline-block";
            document.querySelector(".N1 h1").innerText = negativeTiles[p1sum].question;
            document.getElementById("submit2").onclick = function () {
                let userAnswer = document.querySelector(".ans2").value;
                if (userAnswer === negativeTiles[p1sum].answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".N1").style.display = "none";
                    document.querySelector(".ans1").value = '';
                } else {
                    p1sum += negativeTiles[p1sum].consequence; // Move back if incorrect
                    document.querySelector(".N1").style.display = "none";
                    play("p1", "p1sum", 0, 0); // Recalculate position after moving back
                }
            };
        }

        if (positiveTiles[p1sum]) {
            document.querySelector(".N2").style.display = "inline-block";
            document.querySelector(".N2 h1").innerText = positiveTiles[p1sum].question;
            document.getElementById("submit3").onclick = function () {
                let userAnswer = document.querySelector(".ans3").value;
                if (userAnswer === positiveTiles[p1sum].answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".N2").style.display = "none";
                } else {
                    p1sum += positiveTiles[p1sum].consequence; // Move back if incorrect
                    document.querySelector(".N2").style.display = "none";
                    play("p1", "p1sum", 0, 0); // Recalculate position after moving back
                }
            };
        }
        sum = p1sum
            


    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
            // sum = p1sum
        }
        

      

        
       

        let specialQuestion = getRandomQuestion(p2sum);
        if (specialQuestion) {
            document.querySelector(".Q1").style.display = "inline-block";
            document.querySelector(".Q1 h1").innerText = specialQuestion.question;
            document.getElementById("submit1").onclick = function () {
                let userAnswer = document.querySelector(".ans1").value;
                if (userAnswer === specialQuestion.answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".Q1").style.display = "none";
                    document.querySelector(".ans1").value = '';
                    
                    return;
                } else {
                    if (psum === 'p2sum') p2sum += specialQuestion.consequence;
                    
                    alert("Incorrect! Moving back.");
                  
                }
                
                document.querySelector(".Q1").style.display = "none";
                document.querySelector(".ans1").value = '';
                play("p2", "p2sum", 55, 0);
            };
        }

        if (negativeTiles[p2sum]) {
            document.querySelector(".N1").style.display = "inline-block";
            document.querySelector(".N1 h1").innerText = negativeTiles[p2sum].question;
            document.getElementById("submit2").onclick = function () {
                let userAnswer = document.querySelector(".ans2").value;
                if (userAnswer === negativeTiles[p2sum].answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".N1").style.display = "none";
                } else {
                    p2sum += negativeTiles[p2sum].consequence; // Move back if incorrect
                    document.querySelector(".N1").style.display = "none";
                    play("p2", "p2sum", 55, 0); // Recalculate position after moving back
                }
            };
        }

        if (positiveTiles[p2sum]) {
            document.querySelector(".N2").style.display = "inline-block";
            document.querySelector(".N2 h1").innerText = positiveTiles[p2sum].question;
            document.getElementById("submit3").onclick = function () {
                let userAnswer = document.querySelector(".ans3").value;
                if (userAnswer === positiveTiles[p2sum].answer) {
                    alert("Correct! Retain position.");
                    document.querySelector(".N2").style.display = "none";
                } else {
                    p2sum += positiveTiles[p2sum].consequence; // Move back if incorrect
                    document.querySelector(".N2").style.display = "none";
                    play("p2", "p2sum", 55, 0); // Recalculate position after moving back
                }
            };
        }
        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        // console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    document.getElementById("dice").innerText = num
    container.src = "dice-" + num + ".png";





    if (tog % 2 != 0) {
        document.getElementById('tog').innerText = "Player 2 Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Player 1 Turn : "

        play('p2', 'p2sum', 55, num)

    }

    tog = tog + 1




})

document.getElementById("diceBtn").addEventListener("click", function (){
    play('p1','p1sum',pass,num)
})

document.getElementById("submit1").addEventListener("click", function (){
    document.querySelector(".Q1").style.display = 'none';
    setTimeout(hide_value, 1000);
    
})

function hide_value(){
    document.querySelector(".ans1").value = '';
}
