function large(){

let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')




let p1sum = 0
let p2sum = 0
let anss = document.querySelector(".ans1");
const container = document.querySelector(".dice_pic");
const val = document.getElementById("dice");
const smallScreenQuery = window.matchMedia('(max-height: 750px)');

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
        { question: "What is the product of 100000 and 0?", answer: "0", consequence: -5 },
        { question: "What is the product of 13 and 3?", answer: "39", consequence: -5 },
        { question: "What is the product of -9 and -3?", answer: "27", consequence: -5 },
        { question: "What is the product of 16 and -1?", answer: "-16", consequence: -5 },
        { question: "What is the product of 9 and 9?", answer: "81", consequence: -5 },
    ],
    12: [{ question: "Add the integers: -6 + 10 + (-4)", answer: "0", consequence: -5 },
        { question: "Add the integers: -6 + 12 + (-4)", answer: "2", consequence: -5 },
        { question: "Add the integers: -12 + 5 + (-4)", answer: "-11", consequence: -5 },
        { question: "Add the integers: 30 + (-10) + 14", answer: "34", consequence: -5 },
        { question: "Add the integers: -5 + 5 + (-5)", answer: "-5", consequence: -5 },
        { question: "Add the integers: -16 + 25 + (-9)", answer: "0", consequence: -5 },
        { question: "Add the integers: -16 + 23 + (-8)", answer: "-1", consequence: -5 },
    ],
    14: [{ question: "if you subract -8 from -3, what do you get?", answer: "5", consequence: -5 },
        { question: "if you subract -6 from -2, what do you get?", answer: "4", consequence: -5 },
        { question: "if you subract -10 from -5, what do you get?", answer: "5", consequence: -5 },
        { question: "if you subract -4 from -7, what do you get?", answer: "-3", consequence: -5 },
        { question: "if you subract -15 from -9, what do you get?", answer: "-6", consequence: -5 },
        { question: "if you subract -20 from -12, what do you get?", answer: "8", consequence: -5 },
        { question: "if you subract -5 from 7, what do you get?", answer: "12", consequence: -5 },
        { question: "if you subract -9 from 4, what do you get?", answer: "13", consequence: -5 }
    ],
    19: [{ question: "Simiplify: -12 + 7", answer: "-5", consequence: -5 },
        { question: "Simiplify: -10 + 6", answer: "-4", consequence: -5 },
        { question: "Simiplify: -15 + 9", answer: "-6", consequence: -5 },
        { question: "Simiplify: -20 + 13", answer: "-7", consequence: -5 },
        { question: "Simiplify: -8 + 5", answer: "-3", consequence: -5 },
        { question: "Simiplify: -25 + 18", answer: "-7", consequence: -5 },
        { question: "Simiplify: -30 + 22", answer: "-8", consequence: -5 },
        { question: "Simiplify: -50 + 35", answer: "-15", consequence: -5 }
    ],
    23: [{ question: "if you divide -45 by -5, what is the quotient?", answer: "9", consequence: -5 },
        { question: "If you divide -36 by -6, what is the quotient?", answer: "6", consequence: -5 },
        { question: "If you divide -81 by -9, what is the quotient?", answer: "9", consequence: -5 },
        { question: "If you divide -100 by -10, what is the quotient?", answer: "10", consequence: -5 },
        { question: "If you divide -64 by -8, what is the quotient?", answer: "8", consequence: -5 },
        { question: "If you divide -55 by -11, what is the quotient?", answer: "5", consequence: -5 },
        { question: "If you divide -72 by -12, what is the quotient?", answer: "6", consequence: -5 },
        { question: "If you divide -90 by -15, what is the quotient?", answer: "6", consequence: -5 }
    ],
    24: [{ question: "Add the integers: -8 + 12 + (-5)", answer: "-1", consequence: -5 },
        { question: "Add the integers: -3 + 7 + (-2)", answer: "2", consequence: -5 },
        { question: "Add the integers: -4 + 6 + (-9)", answer: "-7", consequence: -5 },
        { question: "Add the integers: -10 + 15 + (-3)", answer: "2", consequence: -5 },
        { question: "Add the integers: -5 + 8 + (-6)", answer: "-3", consequence: -5 },
        { question: "Add the integers: -7 + 9 + (-4)", answer: "-2", consequence: -5 },
        { question: "Add the integers: -2 + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Add the integers: -9 + 13 + (-8)", answer: "-4", consequence: -5 }
    ],
    28: [{ question: "What is the absolute value of -15?", answer: "15", consequence: -5 },
        { question: "What is the absolute value of -55?", answer: "55", consequence: -5 },
        { question: "What is the absolute value of -19?", answer: "19", consequence: -5 },
        { question: "What is the absolute value of -16?", answer: "16", consequence: -5 },
        { question: "What is the absolute value of -9?", answer: "9", consequence: -5 },
        { question: "What is the absolute value of -104?", answer: "104", consequence: -5 },
        { question: "What is the absolute value of -1?", answer: "1", consequence: -5 },
        { question: "What is the absolute value of -74?", answer: "74", consequence: -5 }
    ],
    29: [{ question: "What is the absolute value of -15?", answer: "15", consequence: -5 },
        { question: "What is the absolute value of -55?", answer: "55", consequence: -5 },
        { question: "What is the absolute value of -19?", answer: "19", consequence: -5 },
        { question: "What is the absolute value of -16?", answer: "16", consequence: -5 },
        { question: "What is the absolute value of -9?", answer: "9", consequence: -5 },
        { question: "What is the absolute value of -104?", answer: "104", consequence: -5 },
        { question: "What is the absolute value of -1?", answer: "1", consequence: -5 },
        { question: "What is the absolute value of -74?", answer: "74", consequence: -5 }
    ],
    35: [{ question: "What integer represents a loss of 12 dollars?", answer: "-12", consequence: -5 },
        { question: "What integer represents a loss of 22 dollars?", answer: "-22", consequence: -5 },
        { question: "What integer represents a loss of 16 dollars?", answer: "-16", consequence: -5 },
        { question: "What integer represents a loss of 19 dollars?", answer: "-19", consequence: -5 },
        { question: "What integer represents a loss of 35 dollars?", answer: "-35", consequence: -5 },
        { question: "What integer represents a loss of 2 dollars?", answer: "-2", consequence: -5 },
        { question: "What integer represents a loss of 29 dollars?", answer: "-29", consequence: -5 },
        { question: "What integer represents a loss of 56 dollars?", answer: "-56", consequence: -5 }
    ],
    37: [{ question: "Solve the following: -5 + 10 +12 +(-4)", answer: "13", consequence: -5 },
        { question: "Solve the following: -6 + 8 + 14 + (-3)", answer: "13", consequence: -5 },
        { question: "Solve the following: -4 + 11 + 7 + (-2)", answer: "12", consequence: -5 },
        { question: "Solve the following: -3 + 9 + 15 + (-5)", answer: "16", consequence: -5 },
        { question: "Solve the following: -8 + 10 + 5 + (-4)", answer: "3", consequence: -5 },
        { question: "Solve the following: -2 + 6 + 20 + (-6)", answer: "18", consequence: -5 },
        { question: "Solve the following: -5 + 12 + 18 + (-7)", answer: "18", consequence: -5 },
        { question: "Solve the following: -7 + 14 + 9 + (-5)", answer: "11", consequence: -5 }
    ],
    38: [{ question: "Solve the following: -10 + 4 + (-7) + (-2)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -5 + 3 + (-8) + (-6)", answer: "-16", consequence: -5 },
        { question: "Solve the following: -12 + 2 + (-3) + (-8)", answer: "-21", consequence: -5 },
        { question: "Solve the following: -9 + 6 + (-5) + (-7)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -4 + 1 + (-9) + (-3)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -8 + 5 + (-6) + (-10)", answer: "-19", consequence: -5 },
        { question: "Solve the following: -3 + 2 + (-10) + (-5)", answer: "-16", consequence: -5 },
        { question: "Solve the following: -7 + 1 + (-6) + (-8)", answer: "-20", consequence: -5 }
    ],
    41: [{ question: "Multiply: -4 × 3 × -7", answer: "84", consequence: -5 },
        { question: "Multiply: -3 × 4 × -5", answer: "60", consequence: -5 },
        { question: "Multiply: -2 × 6 × -8", answer: "96", consequence: -5 },
        { question: "Multiply: -5 × 2 × -9", answer: "90", consequence: -5 },
        { question: "Multiply: -6 × 3 × -4", answer: "-72", consequence: -5 },
        { question: "Multiply: -7 × 2 × -6", answer: "84", consequence: -5 },
        { question: "Multiply: -3 × 5 × -6", answer: "90", consequence: -5 },
        { question: "Multiply: -30 × 0 × 56", answer: "0", consequence: -5 }
    ],
    45: [{ question: "Multiply: -4 × 2 × 5", answer: "-40", consequence: -5 },
        { question: "Multiply: -3 × 6 × 2", answer: "-36", consequence: -5 },
        { question: "Multiply: -7 × 3 × 4", answer: "-84", consequence: -5 },
        { question: "Multiply: -5 × 2 × 6", answer: "-60", consequence: -5 },
        { question: "Multiply: -6 × 4 × 3", answer: "-72", consequence: -5 },
        { question: "Multiply: -8 × 5 × 2", answer: "-80", consequence: -5 },
        { question: "Multiply: -9 × 3 × 2", answer: "-54", consequence: -5 },
        { question: "Multiply: -10 × 4 × 2", answer: "-80", consequence: -5 }
    ],
    47: [{ question: "Simplify: (-15) x (-8) - 10", answer: "110", consequence: -5 },
        { question: "Simplify: (-12) × (-6) - 8", answer: "64", consequence: -5 },
        { question: "Simplify: (-10) × (-7) - 5", answer: "65", consequence: -5 },
        { question: "Simplify: (-8) × (-5) - 6", answer: "34", consequence: -5 },
        { question: "Simplify: (-9) × (-4) - 3", answer: "33", consequence: -5 },
        { question: "Simplify: (-6) × (-9) - 4", answer: "50", consequence: -5 },
        { question: "Simplify: (-7) × (-8) - 2", answer: "54", consequence: -5 },
        { question: "Simplify: (-5) × (-10) - 7", answer: "43", consequence: -5 }
    ],
    52: [{ question: "Simplify: (-12) × (-9) - 40", answer: "-28", consequence: -5 },
        { question: "Simplify: (-14) × (-8) - 50", answer: "-42", consequence: -5 },
        { question: "Simplify: (-13) × (-10) - 60", answer: "-70", consequence: -5 },
        { question: "Simplify: (-11) × (-12) - 55", answer: "-67", consequence: -5 },
        { question: "Simplify: (-15) × (-8) - 70", answer: "-50", consequence: -5 },
        { question: "Simplify: (-16) × (-7) - 75", answer: "-47", consequence: -5 },
        { question: "Simplify: (-14) × (-9) - 80", answer: "-66", consequence: -5 },
        { question: "Simplify: (-18) × (-8) - 90", answer: "-54", consequence: -5 }
    ],
    55: [{ question: "Identify the integer that is closest to zero: -7, 2, 4, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -8, 3, 5, -2", answer: "-2", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -4, 6, 7, -1", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -10, 1, 2, -6", answer: "1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -5, 4, 9, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -2, 6, -1, 0", answer: "0", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -3, -9, 5, -7", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -6, 8, 3, -4", answer: "3", consequence: -5 }
    ],
    57: [{ question: "Identify the integer that is closest to zero: -11, -5, 6, 3, -7", answer: "3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: 12, -4, -8, -1, 2", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -14, 5, 9, -6, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: 100, -30, -67, -21, 22", answer: "-21", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -89, 51, -72, 16, -23", answer: "16", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -6, -2, -7, 0, 3", answer: "0", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -8, 7, -9, 4, -1", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -72, 48, -38, -11, 23", answer: "-11", consequence: -5 }
    ],
    62: [{ question: "You owe your friend $20. Then, you borrow another $15. How much do you owe in total? (note: the anwers are number only do not include words or signs)", answer: "-35", consequence: -5 },
        { question: "You have $10. You spend $15. How much money do you have now? (note: the anwers are number only do not include words or signs)", answer: "-5", consequence: -5 },
        { question: "A submarine is at a depth of 100 meters below sea level. It ascends 40 meters. What is its new depth? (note: the anwers are number only do not include words or signs)", answer: "-60", consequence: -5 },
        { question: "Your bank account has $50. You withdraw $75. How much is left in your account? (note: the anwers are number only do not include words or signs)", answer: "-25", consequence: -5 },
        { question: "You gain 12 points in a game. Then, you lose 20 points. What is your total score? (note: the anwers are number only do not include words or signs)", answer: "-8", consequence: -5 },
        { question: "You start with a debt of $30. You pay off $10. Then, you borrow $5 more. How much do you owe now? (note: the anwers are number only do not include words or signs)", answer: "-25", consequence: -5 },
        { question: "A hiker is 200 feet below sea level. He climbs 150 feet. What is his new elevation? (note: the anwers are number only do not include words or signs)", answer: "-50", consequence: -5 },
        { question: "You start with $40. You spend $60. How much money do you have now? (note: the anwers are number only do not include words or signs)", answer: "-20", consequence: -5 }
    ],
    63: [{ question: "Is the absolute value of -7 greater than the absolute value of 5? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is -12 a positive integer? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the absolute value of -9 equal to the absolute value of 9? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is 8 + (-5) a negative integer? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is the absolute value of -3 greater than 2? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is -15 ÷ 5 a positive integer? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the sum of -4 and 2 greater than zero? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the absolute value of -20 less than the absolute value of 15? (Yes or No)", answer: "No", consequence: -5 }
    ],
    67: [{ question: "Which of the following numbers is the least: -3, 1, -5, 4, 0?", answer: "-5", consequence: -5 },
        { question: "Which of the following numbers is the least: 7, -9, 4, -2, 0?", answer: "-9", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -6, -3, 5, -1, 0?", answer: "5", consequence: -5 },
        { question: "Which of the following numbers is the least: 10, -4, -12, 2, 0?", answer: "-12", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -8, -5, 0, 2, -1?", answer: "2", consequence: -5 },
        { question: "Which of the following numbers is the least: -1, 3, 0, -4, 5?", answer: "-4", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -7, -3, -5, 0, -2?", answer: "0", consequence: -5 },
        { question: "Which of the following numbers is the least: 2, -8, 4, -3, 1?", answer: "-8", consequence: -5 }
    ],
    70: [{ question: "Which of the following numbers is the least: 45, -32, 27, -19, 12?", answer: "-32", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -56, -23, 13, -17, 8?", answer: "13", consequence: -5 },
        { question: "Which of the following numbers is the least: 19, -45, 32, -28, 25?", answer: "-45", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -33, -18, -22, 4, 2?", answer: "4", consequence: -5 },
        { question: "Which of the following numbers is the least: -71, 50, -62, 47, -39?", answer: "-71", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -14, -22, 3, -9, 5?", answer: "5", consequence: -5 },
        { question: "Which of the following numbers is the least: -80, 55, -64, -72, 34?", answer: "-80", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -24, -21, -18, -15, -12?", answer: "-12", consequence: -5 }
    ],
    74: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Simplify: 25 + (-6) × 4 + (-8) + 2", answer: "-5", consequence: -5 },
        { question: "Simplify: -18 + 8 × (-2) + (-10) + 5", answer: "-39", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 }
    ],
    75: [{ question: "Arrange the following integers in ascending order: 4, -2, 1, -5, 0 (Do not add space between the numbers, use coma(,))", answer: "-5,-2,0,1,4", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -7, 3, -1, 8, 6 (Do not add space between the numbers, use coma(,))", answer: "-7,-1,3,6,8", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -10, 9, 4, -3, 6 (Do not add space between the numbers, use coma(,))", answer: "-10,-3,4,6,9", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 2, -6, 5, -3, 0 (Do not add space between the numbers, use coma(,))", answer: "-6,-3,0,2,5", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 12, -8, 0, -2, 7 (Do not add space between the numbers, use coma(,))", answer: "-8,-2,0,7,12", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -1, 4, -3, 8, 0 (Do not add space between the numbers, use coma(,))", answer: "-3,-1,0,4,8", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 6, -4, 3, -1, -2 (Do not add space between the numbers, use coma(,))", answer: "-4,-2,-1,3,6", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -5, 0, 7, -8, 2 (Do not add space between the numbers, use coma(,))", answer: "-8,-5,0,2,7", consequence: -5 }
    ],
    79: [{ question: "Solve: 1 + 4 + (-5) + 8 + (-10) + (-10)", answer: "-12", consequence: -5 },
        { question: "Solve: 2 + 3 + (-4) + 7 + (-8) + (-1)", answer: "-1", consequence: -5 },
        { question: "Solve: 5 + (-6) + 8 + (-2) + (-3) + 4", answer: "6", consequence: -5 },
        { question: "Solve: -3 + 9 + (-7) + 5 + (-2) + (-6)", answer: "-4", consequence: -5 },
        { question: "Solve: 10 + (-3) + (-5) + 6 + (-2) + 4", answer: "10", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 }
    ],
    85: [{ question: "Solve: 3 + (-4) + 2 + (-5) + 6 + (-1) + 8", answer: "9", consequence: -5 },
        { question: "Solve: -2 + 7 + (-3) + 4 + (-6) + 5 + (-1)", answer: "4", consequence: -5 },
        { question: "Solve: 6 + (-9) + 8 + (-3) + (-7) + 2 + 1", answer: "-2", consequence: -5 },
        { question: "Solve: 4 + (-5) + 10 + (-2) + 1 + (-6) + 3", answer: "5", consequence: -5 },
        { question: "Solve: 9 + (-10) + 6 + (-4) + 7 + (-2) + 1", answer: "7", consequence: -5 },
        { question: "Solve: -3 + 5 + (-6) + 2 + 8 + (-1) + 4", answer: "9", consequence: -5 },
        { question: "Solve: 7 + (-8) + 3 + (-2) + 9 + (-4) + 6", answer: "11", consequence: -5 },
        { question: "Solve: -5 + 2 + (-4) + 8 + 3 + (-6) + 1", answer: "-1", consequence: -5 }
    ],
    88: [{ question: "Solve: (-4) x (-2) x (-3) + 50", answer: "26", consequence: -5 },
        { question: "Solve: (-5) x (-7) x 2 + 30", answer: "100", consequence: -5 },
        { question: "Solve: (-6) x 8 x (-2) + 100", answer: "196", consequence: -5 },
        { question: "Solve: 3 x (-5) x (-4) + 60", answer: "120", consequence: -5 },
        { question: "Solve: (-8) x (-2) x 4 + 25", answer: "89", consequence: -5 },
        { question: "Solve: (-3) x (-9) x (-2) + 40", answer: "-14", consequence: -5 },
        { question: "Solve: 7 x (-6) x (-1) + 15", answer: "57", consequence: -5 },
        { question: "Solve: (-10) x 5 x (-3) + 20", answer: "170", consequence: -5 }
    ],
    90: [{ question: "Solve: (-3) x (-5) x 2 + 60", answer: "90", consequence: -5 },
        { question: "Solve: 7 x (-4) x (-2) + 50", answer: "106", consequence: -5 },
        { question: "Solve: (-8) x 3 x (-4) + 100", answer: "196", consequence: -5 },
        { question: "Solve: (-4) x 5 x (-3) + 80", answer: "140", consequence: -5 },
        { question: "Solve: 10 x (-2) x (-3) + 70", answer: "130", consequence: -5 },
        { question: "Solve: (-6) x (-3) x 4 + 30", answer: "102", consequence: -5 },
        { question: "Solve: (-7) x 4 x (-5) + 20", answer: "160", consequence: -5 },
        { question: "Solve: 6 x (-9) x 2 + 45", answer: "-63", consequence: -5 }
    ],
    91: [{ question: "Solve: (-5) x (-2) x 4 x (-3) + 60", answer: "-60", consequence: -5 },
        { question: "Solve: 8 x (-4) x 3 x (-2) + 100", answer: "292", consequence: -5 },
        { question: "Solve: (-6) x 2 x (-3) x 5 + 50", answer: "230", consequence: -5 },
        { question: "Solve: (-4) x 3 x (-5) x 2 + 30", answer: "150", consequence: -5 },
        { question: "Solve: 10 x (-2) x 5 x (-3) + 70", answer: "370", consequence: -5 },
        { question: "Solve: (-8) x (-3) x 4 x 2 + 60", answer: "252", consequence: -5 },
        { question: "Solve: 7 x (-6) x 3 x (-2) + 80", answer: "332", consequence: -5 },
        { question: "Solve: (-3) x 6 x (-2) x 5 + 40", answer: "220", consequence: -5 }
    ],
    92: [{ question: "Solve: 5 + (-7) + 9 + (-3) + (-4) + 6 + (-2) + 1", answer: "5", consequence: -5 },
        { question: "Solve: (-8) + 3 + (-5) + 6 + (-4) + 7 + (-2) + 1", answer: "-2", consequence: -5 },
        { question: "Solve: 10 + (-3) + (-7) + 5 + 2 + (-1) + (-6) + 4", answer: "4", consequence: -5 },
        { question: "Solve: (-3) + 6 + (-9) + 8 + (-4) + 3 + (-2) + 5", answer: "4", consequence: -5 },
        { question: "Solve: (-6) + 4 + (-2) + 10 + (-8) + 7 + (-3) + 5", answer: "7", consequence: -5 },
        { question: "Solve: 9 + (-5) + 4 + (-7) + 8 + (-3) + 2 + (-6)", answer: "2", consequence: -5 },
        { question: "Solve: (-2) + 3 + (-6) + 9 + (-4) + 7 + (-1) + 5", answer: "11", consequence: -5 },
        { question: "Solve: 4 + (-8) + 7 + (-2) + 9 + (-5) + 6 + (-3)", answer: "8", consequence: -5 }
    ],
    93: [{ question: "Solve: 3 + (-5) + 8 + (-7) + 4 + (-2) + 6 + (-1)", answer: "6", consequence: -5 },
        { question: "Solve: (-3) + 5 + (-4) + 6 + (-2) + 8 + (-1) + 7", answer: "16", consequence: -5 },
        { question: "Solve: 6 + (-8) + 3 + (-5) + 7 + (-2) + 4 + (-1)", answer: "4", consequence: -5 },
        { question: "Solve: (-10) + 9 + (-3) + 8 + (-6) + 5 + (-1) + 7", answer: "9", consequence: -5 },
        { question: "Solve: 4 + (-6) + 2 + (-8) + 3 + (-4) + 5 + (-1)", answer: "-5", consequence: -5 },
        { question: "Solve: (-7) + 4 + (-3) + 5 + (-9) + 2 + (-6) + 8", answer: "-6", consequence: -5 },
        { question: "Solve: 7 + (-2) + 9 + (-3) + 4 + (-6) + 8 + (-1)", answer: "16", consequence: -5 },
    ],
    94: [{ question: "Solve: 10 + (-6) + 3 + (-8) + 5 + (-4) + 2 + (-1)", answer: "1", consequence: -5 },
        { question: "Solve: (-4) + 8 + (-6) + 3 + (-5) + 7 + (-2) + 6", answer: "7", consequence: -5 },
        { question: "Solve: 9 + (-3) + 5 + (-2) + 4 + (-6) + 7 + (-8)", answer: "6", consequence: -5 },
        { question: "Solve: (-7) + 12 + (-4) + 3 + (-9) + 5 + (-1) + 6", answer: "5", consequence: -5 },
        { question: "Solve: (-3) + 10 + (-2) + 7 + (-5) + 6 + (-8) + 4", answer: "9", consequence: -5 },
        { question: "Solve: 11 + (-9) + 4 + (-3) + 8 + (-6) + 7 + (-2)", answer: "10", consequence: -5 },
        { question: "Solve: (-4) + 9 + (-7) + 6 + (-5) + 3 + (-2) + 8", answer: "8", consequence: -5 },
    ],
    95: [{ question: "Solve: 15 + (-8) + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "20", consequence: -5 },
        { question: "Solve: 25 + (-8) + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "30", consequence: -5 },
        { question: "Solve: 25 + 12 + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "50", consequence: -5 },
        { question: "Solve: 18 + (-7) + 11 + (-4) + 9 + (-2) + 8 + (-1)", answer: "32", consequence: -5 },
        { question: "Solve: 30 + (-10) + 20 + 8 + 10 + (-5) + 7 + 6", answer: "66", consequence: -5 },
        { question: "Solve: 18 + (-9) + 8 + 10 + 12 + (-6) + 9 + (-3)", answer: "39", consequence: -5 },
        { question: "Solve: 25 + (-12) + 18 + (-5) + 8 + (-2) + 10 + (-6)", answer: "36", consequence: -5 },
    ],
    95: [{ question: "Solve: 6115 x (-80) + 273 + (-15) x 0 x (-2) x 600 x (-143)", answer: "0", consequence: -5 },
        { question: "Solve: 250 x (-48) + 517 + (-5) x 10 x (-2) x 0 + 9", answer: "9", consequence: -5 },
        { question: "Solve: 952 x (-342) x 0 x 513 x (-30) + (-12) + 6", answer: "-12", consequence: -5 },
        { question: "Solve: 8115 x 0 + 273 + (-15) x 480 x 0 x 600 x (-143)", answer: "0", consequence: -5 }
    ],
    96: [{ question: "Solve: 10 + (-20) + 15 + (-8) + (-5) + 12 + (-4) + (-3)", answer: "-3", consequence: -5 },
        { question: "Solve: 15 + (-25) + 12 + (-18) + (-10) + 6 + (-4) + (-7)", answer: "-31", consequence: -5 },
        { question: "Solve: 25 + (-45) + 15 + (-10) + (-7) + 5 + (-8) + (-9)", answer: "34", consequence: -5 },
        { question: "Solve: 20 + (-50) + 10 + (-8) + (-15) + 5 + (-7) + (-9)", answer: "54", consequence: -5 }
    ],
    97: [{ question: "Solve: 30 + (-40) + 12 + (-20) + (-8) + 4 + (-10) + (-5)", answer: "-37", consequence: -5 },
        { question: "Solve: 15 + (-25) + 12 + (-18) + (-10) + 6 + (-4) + (-7)", answer: "-31", consequence: -5 },
        { question: "Solve: 25 + (-45) + 15 + (-10) + (-7) + 5 + (-8) + (-9)", answer: "34", consequence: -5 },
        { question: "Solve: 20 + (-50) + 10 + (-8) + (-15) + 5 + (-7) + (-9)", answer: "54", consequence: -5 },
        { question: "Solve: 30 + (-10) + 20 + 8 + 10 + (-5) + 7 + 6", answer: "66", consequence: -5 },
        { question: "Solve: 18 + (-9) + 8 + 10 + 12 + (-6) + 9 + (-3)", answer: "39", consequence: -5 },
        { question: "Solve: 25 + (-12) + 18 + (-5) + 8 + (-2) + 10 + (-6)", answer: "36", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 }
    ],
    98: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 }
    ],
    99: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 },
        { question: "Solve: (-4) x (-2) x (-3) + 50", answer: "26", consequence: -5 },
        { question: "Solve: (-5) x (-7) x 2 + 30", answer: "100", consequence: -5 },
        { question: "Solve: (-6) x 8 x (-2) + 100", answer: "196", consequence: -5 },
        { question: "Solve: 3 x (-5) x (-4) + 60", answer: "120", consequence: -5 },
        { question: "Solve: (-8) x (-2) x 4 + 25", answer: "89", consequence: -5 },
        { question: "Solve: (-3) x (-9) x (-2) + 40", answer: "-14", consequence: -5 },
        { question: "Solve: 7 x (-6) x (-1) + 15", answer: "57", consequence: -5 },
        { question: "Solve: (-10) x 5 x (-3) + 20", answer: "170", consequence: -5 }
    ],
    
    
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
        11: { question: "Negative tiles! -3", answer: "8x", consequence: -3 },
        13: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        21: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        27: { question: "Negative tiles! -10", answer: "8x", consequence: -10 },
        36: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        44: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        54: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        65: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        81: { question: "Negative tiles! -6", answer: "8x", consequence: -6 },
        89: { question: "Negative tiles! -2", answer: "8x", consequence: -2 }
    };
    const positiveTiles = {
        4: { question: "Positive tiles! +10", answer: "8x", consequence: 10 },
        17: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        25: { question: "Positive tiles! +1", answer: "8x", consequence: 1 },
        30: { question: "Positive tiles! +3", answer: "8x", consequence: 3 },
        39: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        49: { question: "Positive tiles! +10", answer: "8x", consequence: 10 },
        56: { question: "Positive tiles! +1", answer: "8x", consequence: 1 },
        64: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        71: { question: "Positive tiles! +8", answer: "8x", consequence: 8 },

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
            alert("Player 1 Won !!")
        }
        else if (player == 'p2') {
            alert("Player 2 Won !!")
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


}



//adawdawdawd//
function small(){

let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')




let p1sum = 0
let p2sum = 0
let anss = document.querySelector(".ans1");
const container = document.querySelector(".dice_pic");
const val = document.getElementById("dice");
const smallScreenQuery = window.matchMedia('(max-height: 750px)');

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
        { question: "What is the product of 100000 and 0?", answer: "0", consequence: -5 },
        { question: "What is the product of 13 and 3?", answer: "39", consequence: -5 },
        { question: "What is the product of -9 and -3?", answer: "27", consequence: -5 },
        { question: "What is the product of 16 and -1?", answer: "-16", consequence: -5 },
        { question: "What is the product of 9 and 9?", answer: "81", consequence: -5 },
    ],
    12: [{ question: "Add the integers: -6 + 10 + (-4)", answer: "0", consequence: -5 },
        { question: "Add the integers: -6 + 12 + (-4)", answer: "2", consequence: -5 },
        { question: "Add the integers: -12 + 5 + (-4)", answer: "-11", consequence: -5 },
        { question: "Add the integers: 30 + (-10) + 14", answer: "34", consequence: -5 },
        { question: "Add the integers: -5 + 5 + (-5)", answer: "-5", consequence: -5 },
        { question: "Add the integers: -16 + 25 + (-9)", answer: "0", consequence: -5 },
        { question: "Add the integers: -16 + 23 + (-8)", answer: "-1", consequence: -5 },
    ],
    14: [{ question: "if you subract -8 from -3, what do you get?", answer: "5", consequence: -5 },
        { question: "if you subract -6 from -2, what do you get?", answer: "4", consequence: -5 },
        { question: "if you subract -10 from -5, what do you get?", answer: "5", consequence: -5 },
        { question: "if you subract -4 from -7, what do you get?", answer: "-3", consequence: -5 },
        { question: "if you subract -15 from -9, what do you get?", answer: "-6", consequence: -5 },
        { question: "if you subract -20 from -12, what do you get?", answer: "8", consequence: -5 },
        { question: "if you subract -5 from 7, what do you get?", answer: "12", consequence: -5 },
        { question: "if you subract -9 from 4, what do you get?", answer: "13", consequence: -5 }
    ],
    19: [{ question: "Simiplify: -12 + 7", answer: "-5", consequence: -5 },
        { question: "Simiplify: -10 + 6", answer: "-4", consequence: -5 },
        { question: "Simiplify: -15 + 9", answer: "-6", consequence: -5 },
        { question: "Simiplify: -20 + 13", answer: "-7", consequence: -5 },
        { question: "Simiplify: -8 + 5", answer: "-3", consequence: -5 },
        { question: "Simiplify: -25 + 18", answer: "-7", consequence: -5 },
        { question: "Simiplify: -30 + 22", answer: "-8", consequence: -5 },
        { question: "Simiplify: -50 + 35", answer: "-15", consequence: -5 }
    ],
    23: [{ question: "if you divide -45 by -5, what is the quotient?", answer: "9", consequence: -5 },
        { question: "If you divide -36 by -6, what is the quotient?", answer: "6", consequence: -5 },
        { question: "If you divide -81 by -9, what is the quotient?", answer: "9", consequence: -5 },
        { question: "If you divide -100 by -10, what is the quotient?", answer: "10", consequence: -5 },
        { question: "If you divide -64 by -8, what is the quotient?", answer: "8", consequence: -5 },
        { question: "If you divide -55 by -11, what is the quotient?", answer: "5", consequence: -5 },
        { question: "If you divide -72 by -12, what is the quotient?", answer: "6", consequence: -5 },
        { question: "If you divide -90 by -15, what is the quotient?", answer: "6", consequence: -5 }
    ],
    24: [{ question: "Add the integers: -8 + 12 + (-5)", answer: "-1", consequence: -5 },
        { question: "Add the integers: -3 + 7 + (-2)", answer: "2", consequence: -5 },
        { question: "Add the integers: -4 + 6 + (-9)", answer: "-7", consequence: -5 },
        { question: "Add the integers: -10 + 15 + (-3)", answer: "2", consequence: -5 },
        { question: "Add the integers: -5 + 8 + (-6)", answer: "-3", consequence: -5 },
        { question: "Add the integers: -7 + 9 + (-4)", answer: "-2", consequence: -5 },
        { question: "Add the integers: -2 + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Add the integers: -9 + 13 + (-8)", answer: "-4", consequence: -5 }
    ],
    28: [{ question: "What is the absolute value of -15?", answer: "15", consequence: -5 },
        { question: "What is the absolute value of -55?", answer: "55", consequence: -5 },
        { question: "What is the absolute value of -19?", answer: "19", consequence: -5 },
        { question: "What is the absolute value of -16?", answer: "16", consequence: -5 },
        { question: "What is the absolute value of -9?", answer: "9", consequence: -5 },
        { question: "What is the absolute value of -104?", answer: "104", consequence: -5 },
        { question: "What is the absolute value of -1?", answer: "1", consequence: -5 },
        { question: "What is the absolute value of -74?", answer: "74", consequence: -5 }
    ],
    29: [{ question: "What is the absolute value of -15?", answer: "15", consequence: -5 },
        { question: "What is the absolute value of -55?", answer: "55", consequence: -5 },
        { question: "What is the absolute value of -19?", answer: "19", consequence: -5 },
        { question: "What is the absolute value of -16?", answer: "16", consequence: -5 },
        { question: "What is the absolute value of -9?", answer: "9", consequence: -5 },
        { question: "What is the absolute value of -104?", answer: "104", consequence: -5 },
        { question: "What is the absolute value of -1?", answer: "1", consequence: -5 },
        { question: "What is the absolute value of -74?", answer: "74", consequence: -5 }
    ],
    35: [{ question: "What integer represents a loss of 12 dollars?", answer: "-12", consequence: -5 },
        { question: "What integer represents a loss of 22 dollars?", answer: "-22", consequence: -5 },
        { question: "What integer represents a loss of 16 dollars?", answer: "-16", consequence: -5 },
        { question: "What integer represents a loss of 19 dollars?", answer: "-19", consequence: -5 },
        { question: "What integer represents a loss of 35 dollars?", answer: "-35", consequence: -5 },
        { question: "What integer represents a loss of 2 dollars?", answer: "-2", consequence: -5 },
        { question: "What integer represents a loss of 29 dollars?", answer: "-29", consequence: -5 },
        { question: "What integer represents a loss of 56 dollars?", answer: "-56", consequence: -5 }
    ],
    37: [{ question: "Solve the following: -5 + 10 +12 +(-4)", answer: "13", consequence: -5 },
        { question: "Solve the following: -6 + 8 + 14 + (-3)", answer: "13", consequence: -5 },
        { question: "Solve the following: -4 + 11 + 7 + (-2)", answer: "12", consequence: -5 },
        { question: "Solve the following: -3 + 9 + 15 + (-5)", answer: "16", consequence: -5 },
        { question: "Solve the following: -8 + 10 + 5 + (-4)", answer: "3", consequence: -5 },
        { question: "Solve the following: -2 + 6 + 20 + (-6)", answer: "18", consequence: -5 },
        { question: "Solve the following: -5 + 12 + 18 + (-7)", answer: "18", consequence: -5 },
        { question: "Solve the following: -7 + 14 + 9 + (-5)", answer: "11", consequence: -5 }
    ],
    38: [{ question: "Solve the following: -10 + 4 + (-7) + (-2)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -5 + 3 + (-8) + (-6)", answer: "-16", consequence: -5 },
        { question: "Solve the following: -12 + 2 + (-3) + (-8)", answer: "-21", consequence: -5 },
        { question: "Solve the following: -9 + 6 + (-5) + (-7)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -4 + 1 + (-9) + (-3)", answer: "-15", consequence: -5 },
        { question: "Solve the following: -8 + 5 + (-6) + (-10)", answer: "-19", consequence: -5 },
        { question: "Solve the following: -3 + 2 + (-10) + (-5)", answer: "-16", consequence: -5 },
        { question: "Solve the following: -7 + 1 + (-6) + (-8)", answer: "-20", consequence: -5 }
    ],
    41: [{ question: "Multiply: -4 × 3 × -7", answer: "84", consequence: -5 },
        { question: "Multiply: -3 × 4 × -5", answer: "60", consequence: -5 },
        { question: "Multiply: -2 × 6 × -8", answer: "96", consequence: -5 },
        { question: "Multiply: -5 × 2 × -9", answer: "90", consequence: -5 },
        { question: "Multiply: -6 × 3 × -4", answer: "-72", consequence: -5 },
        { question: "Multiply: -7 × 2 × -6", answer: "84", consequence: -5 },
        { question: "Multiply: -3 × 5 × -6", answer: "90", consequence: -5 },
        { question: "Multiply: -30 × 0 × 56", answer: "0", consequence: -5 }
    ],
    45: [{ question: "Multiply: -4 × 2 × 5", answer: "-40", consequence: -5 },
        { question: "Multiply: -3 × 6 × 2", answer: "-36", consequence: -5 },
        { question: "Multiply: -7 × 3 × 4", answer: "-84", consequence: -5 },
        { question: "Multiply: -5 × 2 × 6", answer: "-60", consequence: -5 },
        { question: "Multiply: -6 × 4 × 3", answer: "-72", consequence: -5 },
        { question: "Multiply: -8 × 5 × 2", answer: "-80", consequence: -5 },
        { question: "Multiply: -9 × 3 × 2", answer: "-54", consequence: -5 },
        { question: "Multiply: -10 × 4 × 2", answer: "-80", consequence: -5 }
    ],
    47: [{ question: "Simplify: (-15) x (-8) - 10", answer: "110", consequence: -5 },
        { question: "Simplify: (-12) × (-6) - 8", answer: "64", consequence: -5 },
        { question: "Simplify: (-10) × (-7) - 5", answer: "65", consequence: -5 },
        { question: "Simplify: (-8) × (-5) - 6", answer: "34", consequence: -5 },
        { question: "Simplify: (-9) × (-4) - 3", answer: "33", consequence: -5 },
        { question: "Simplify: (-6) × (-9) - 4", answer: "50", consequence: -5 },
        { question: "Simplify: (-7) × (-8) - 2", answer: "54", consequence: -5 },
        { question: "Simplify: (-5) × (-10) - 7", answer: "43", consequence: -5 }
    ],
    52: [{ question: "Simplify: (-12) × (-9) - 40", answer: "-28", consequence: -5 },
        { question: "Simplify: (-14) × (-8) - 50", answer: "-42", consequence: -5 },
        { question: "Simplify: (-13) × (-10) - 60", answer: "-70", consequence: -5 },
        { question: "Simplify: (-11) × (-12) - 55", answer: "-67", consequence: -5 },
        { question: "Simplify: (-15) × (-8) - 70", answer: "-50", consequence: -5 },
        { question: "Simplify: (-16) × (-7) - 75", answer: "-47", consequence: -5 },
        { question: "Simplify: (-14) × (-9) - 80", answer: "-66", consequence: -5 },
        { question: "Simplify: (-18) × (-8) - 90", answer: "-54", consequence: -5 }
    ],
    55: [{ question: "Identify the integer that is closest to zero: -7, 2, 4, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -8, 3, 5, -2", answer: "-2", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -4, 6, 7, -1", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -10, 1, 2, -6", answer: "1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -5, 4, 9, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -2, 6, -1, 0", answer: "0", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -3, -9, 5, -7", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -6, 8, 3, -4", answer: "3", consequence: -5 }
    ],
    57: [{ question: "Identify the integer that is closest to zero: -11, -5, 6, 3, -7", answer: "3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: 12, -4, -8, -1, 2", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -14, 5, 9, -6, -3", answer: "-3", consequence: -5 },
        { question: "Identify the integer that is closest to zero: 100, -30, -67, -21, 22", answer: "-21", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -89, 51, -72, 16, -23", answer: "16", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -6, -2, -7, 0, 3", answer: "0", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -8, 7, -9, 4, -1", answer: "-1", consequence: -5 },
        { question: "Identify the integer that is closest to zero: -72, 48, -38, -11, 23", answer: "-11", consequence: -5 }
    ],
    62: [{ question: "You owe your friend $20. Then, you borrow another $15. How much do you owe in total? (note: the anwers are number only do not include words or signs)", answer: "-35", consequence: -5 },
        { question: "You have $10. You spend $15. How much money do you have now? (note: the anwers are number only do not include words or signs)", answer: "-5", consequence: -5 },
        { question: "A submarine is at a depth of 100 meters below sea level. It ascends 40 meters. What is its new depth? (note: the anwers are number only do not include words or signs)", answer: "-60", consequence: -5 },
        { question: "Your bank account has $50. You withdraw $75. How much is left in your account? (note: the anwers are number only do not include words or signs)", answer: "-25", consequence: -5 },
        { question: "You gain 12 points in a game. Then, you lose 20 points. What is your total score? (note: the anwers are number only do not include words or signs)", answer: "-8", consequence: -5 },
        { question: "You start with a debt of $30. You pay off $10. Then, you borrow $5 more. How much do you owe now? (note: the anwers are number only do not include words or signs)", answer: "-25", consequence: -5 },
        { question: "A hiker is 200 feet below sea level. He climbs 150 feet. What is his new elevation? (note: the anwers are number only do not include words or signs)", answer: "-50", consequence: -5 },
        { question: "You start with $40. You spend $60. How much money do you have now? (note: the anwers are number only do not include words or signs)", answer: "-20", consequence: -5 }
    ],
    63: [{ question: "Is the absolute value of -7 greater than the absolute value of 5? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is -12 a positive integer? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the absolute value of -9 equal to the absolute value of 9? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is 8 + (-5) a negative integer? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is the absolute value of -3 greater than 2? (Yes or No)", answer: "Yes", consequence: -5 },
        { question: "Is -15 ÷ 5 a positive integer? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the sum of -4 and 2 greater than zero? (Yes or No)", answer: "No", consequence: -5 },
        { question: "Is the absolute value of -20 less than the absolute value of 15? (Yes or No)", answer: "No", consequence: -5 }
    ],
    67: [{ question: "Which of the following numbers is the least: -3, 1, -5, 4, 0?", answer: "-5", consequence: -5 },
        { question: "Which of the following numbers is the least: 7, -9, 4, -2, 0?", answer: "-9", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -6, -3, 5, -1, 0?", answer: "5", consequence: -5 },
        { question: "Which of the following numbers is the least: 10, -4, -12, 2, 0?", answer: "-12", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -8, -5, 0, 2, -1?", answer: "2", consequence: -5 },
        { question: "Which of the following numbers is the least: -1, 3, 0, -4, 5?", answer: "-4", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -7, -3, -5, 0, -2?", answer: "0", consequence: -5 },
        { question: "Which of the following numbers is the least: 2, -8, 4, -3, 1?", answer: "-8", consequence: -5 }
    ],
    70: [{ question: "Which of the following numbers is the least: 45, -32, 27, -19, 12?", answer: "-32", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -56, -23, 13, -17, 8?", answer: "13", consequence: -5 },
        { question: "Which of the following numbers is the least: 19, -45, 32, -28, 25?", answer: "-45", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -33, -18, -22, 4, 2?", answer: "4", consequence: -5 },
        { question: "Which of the following numbers is the least: -71, 50, -62, 47, -39?", answer: "-71", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -14, -22, 3, -9, 5?", answer: "5", consequence: -5 },
        { question: "Which of the following numbers is the least: -80, 55, -64, -72, 34?", answer: "-80", consequence: -5 },
        { question: "Which of the following numbers is the greatest: -24, -21, -18, -15, -12?", answer: "-12", consequence: -5 }
    ],
    74: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Simplify: 25 + (-6) × 4 + (-8) + 2", answer: "-5", consequence: -5 },
        { question: "Simplify: -18 + 8 × (-2) + (-10) + 5", answer: "-39", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 }
    ],
    75: [{ question: "Arrange the following integers in ascending order: 4, -2, 1, -5, 0 (Do not add space between the numbers, use coma(,))", answer: "-5,-2,0,1,4", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -7, 3, -1, 8, 6 (Do not add space between the numbers, use coma(,))", answer: "-7,-1,3,6,8", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -10, 9, 4, -3, 6 (Do not add space between the numbers, use coma(,))", answer: "-10,-3,4,6,9", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 2, -6, 5, -3, 0 (Do not add space between the numbers, use coma(,))", answer: "-6,-3,0,2,5", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 12, -8, 0, -2, 7 (Do not add space between the numbers, use coma(,))", answer: "-8,-2,0,7,12", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -1, 4, -3, 8, 0 (Do not add space between the numbers, use coma(,))", answer: "-3,-1,0,4,8", consequence: -5 },
        { question: "Arrange the following integers in ascending order: 6, -4, 3, -1, -2 (Do not add space between the numbers, use coma(,))", answer: "-4,-2,-1,3,6", consequence: -5 },
        { question: "Arrange the following integers in ascending order: -5, 0, 7, -8, 2 (Do not add space between the numbers, use coma(,))", answer: "-8,-5,0,2,7", consequence: -5 }
    ],
    79: [{ question: "Solve: 1 + 4 + (-5) + 8 + (-10) + (-10)", answer: "-12", consequence: -5 },
        { question: "Solve: 2 + 3 + (-4) + 7 + (-8) + (-1)", answer: "-1", consequence: -5 },
        { question: "Solve: 5 + (-6) + 8 + (-2) + (-3) + 4", answer: "6", consequence: -5 },
        { question: "Solve: -3 + 9 + (-7) + 5 + (-2) + (-6)", answer: "-4", consequence: -5 },
        { question: "Solve: 10 + (-3) + (-5) + 6 + (-2) + 4", answer: "10", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 }
    ],
    85: [{ question: "Solve: 3 + (-4) + 2 + (-5) + 6 + (-1) + 8", answer: "9", consequence: -5 },
        { question: "Solve: -2 + 7 + (-3) + 4 + (-6) + 5 + (-1)", answer: "4", consequence: -5 },
        { question: "Solve: 6 + (-9) + 8 + (-3) + (-7) + 2 + 1", answer: "-2", consequence: -5 },
        { question: "Solve: 4 + (-5) + 10 + (-2) + 1 + (-6) + 3", answer: "5", consequence: -5 },
        { question: "Solve: 9 + (-10) + 6 + (-4) + 7 + (-2) + 1", answer: "7", consequence: -5 },
        { question: "Solve: -3 + 5 + (-6) + 2 + 8 + (-1) + 4", answer: "9", consequence: -5 },
        { question: "Solve: 7 + (-8) + 3 + (-2) + 9 + (-4) + 6", answer: "11", consequence: -5 },
        { question: "Solve: -5 + 2 + (-4) + 8 + 3 + (-6) + 1", answer: "-1", consequence: -5 }
    ],
    88: [{ question: "Solve: (-4) x (-2) x (-3) + 50", answer: "26", consequence: -5 },
        { question: "Solve: (-5) x (-7) x 2 + 30", answer: "100", consequence: -5 },
        { question: "Solve: (-6) x 8 x (-2) + 100", answer: "196", consequence: -5 },
        { question: "Solve: 3 x (-5) x (-4) + 60", answer: "120", consequence: -5 },
        { question: "Solve: (-8) x (-2) x 4 + 25", answer: "89", consequence: -5 },
        { question: "Solve: (-3) x (-9) x (-2) + 40", answer: "-14", consequence: -5 },
        { question: "Solve: 7 x (-6) x (-1) + 15", answer: "57", consequence: -5 },
        { question: "Solve: (-10) x 5 x (-3) + 20", answer: "170", consequence: -5 }
    ],
    90: [{ question: "Solve: (-3) x (-5) x 2 + 60", answer: "90", consequence: -5 },
        { question: "Solve: 7 x (-4) x (-2) + 50", answer: "106", consequence: -5 },
        { question: "Solve: (-8) x 3 x (-4) + 100", answer: "196", consequence: -5 },
        { question: "Solve: (-4) x 5 x (-3) + 80", answer: "140", consequence: -5 },
        { question: "Solve: 10 x (-2) x (-3) + 70", answer: "130", consequence: -5 },
        { question: "Solve: (-6) x (-3) x 4 + 30", answer: "102", consequence: -5 },
        { question: "Solve: (-7) x 4 x (-5) + 20", answer: "160", consequence: -5 },
        { question: "Solve: 6 x (-9) x 2 + 45", answer: "-63", consequence: -5 }
    ],
    91: [{ question: "Solve: (-5) x (-2) x 4 x (-3) + 60", answer: "-60", consequence: -5 },
        { question: "Solve: 8 x (-4) x 3 x (-2) + 100", answer: "292", consequence: -5 },
        { question: "Solve: (-6) x 2 x (-3) x 5 + 50", answer: "230", consequence: -5 },
        { question: "Solve: (-4) x 3 x (-5) x 2 + 30", answer: "150", consequence: -5 },
        { question: "Solve: 10 x (-2) x 5 x (-3) + 70", answer: "370", consequence: -5 },
        { question: "Solve: (-8) x (-3) x 4 x 2 + 60", answer: "252", consequence: -5 },
        { question: "Solve: 7 x (-6) x 3 x (-2) + 80", answer: "332", consequence: -5 },
        { question: "Solve: (-3) x 6 x (-2) x 5 + 40", answer: "220", consequence: -5 }
    ],
    92: [{ question: "Solve: 5 + (-7) + 9 + (-3) + (-4) + 6 + (-2) + 1", answer: "5", consequence: -5 },
        { question: "Solve: (-8) + 3 + (-5) + 6 + (-4) + 7 + (-2) + 1", answer: "-2", consequence: -5 },
        { question: "Solve: 10 + (-3) + (-7) + 5 + 2 + (-1) + (-6) + 4", answer: "4", consequence: -5 },
        { question: "Solve: (-3) + 6 + (-9) + 8 + (-4) + 3 + (-2) + 5", answer: "4", consequence: -5 },
        { question: "Solve: (-6) + 4 + (-2) + 10 + (-8) + 7 + (-3) + 5", answer: "7", consequence: -5 },
        { question: "Solve: 9 + (-5) + 4 + (-7) + 8 + (-3) + 2 + (-6)", answer: "2", consequence: -5 },
        { question: "Solve: (-2) + 3 + (-6) + 9 + (-4) + 7 + (-1) + 5", answer: "11", consequence: -5 },
        { question: "Solve: 4 + (-8) + 7 + (-2) + 9 + (-5) + 6 + (-3)", answer: "8", consequence: -5 }
    ],
    93: [{ question: "Solve: 3 + (-5) + 8 + (-7) + 4 + (-2) + 6 + (-1)", answer: "6", consequence: -5 },
        { question: "Solve: (-3) + 5 + (-4) + 6 + (-2) + 8 + (-1) + 7", answer: "16", consequence: -5 },
        { question: "Solve: 6 + (-8) + 3 + (-5) + 7 + (-2) + 4 + (-1)", answer: "4", consequence: -5 },
        { question: "Solve: (-10) + 9 + (-3) + 8 + (-6) + 5 + (-1) + 7", answer: "9", consequence: -5 },
        { question: "Solve: 4 + (-6) + 2 + (-8) + 3 + (-4) + 5 + (-1)", answer: "-5", consequence: -5 },
        { question: "Solve: (-7) + 4 + (-3) + 5 + (-9) + 2 + (-6) + 8", answer: "-6", consequence: -5 },
        { question: "Solve: 7 + (-2) + 9 + (-3) + 4 + (-6) + 8 + (-1)", answer: "16", consequence: -5 },
    ],
    94: [{ question: "Solve: 10 + (-6) + 3 + (-8) + 5 + (-4) + 2 + (-1)", answer: "1", consequence: -5 },
        { question: "Solve: (-4) + 8 + (-6) + 3 + (-5) + 7 + (-2) + 6", answer: "7", consequence: -5 },
        { question: "Solve: 9 + (-3) + 5 + (-2) + 4 + (-6) + 7 + (-8)", answer: "6", consequence: -5 },
        { question: "Solve: (-7) + 12 + (-4) + 3 + (-9) + 5 + (-1) + 6", answer: "5", consequence: -5 },
        { question: "Solve: (-3) + 10 + (-2) + 7 + (-5) + 6 + (-8) + 4", answer: "9", consequence: -5 },
        { question: "Solve: 11 + (-9) + 4 + (-3) + 8 + (-6) + 7 + (-2)", answer: "10", consequence: -5 },
        { question: "Solve: (-4) + 9 + (-7) + 6 + (-5) + 3 + (-2) + 8", answer: "8", consequence: -5 },
    ],
    95: [{ question: "Solve: 15 + (-8) + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "20", consequence: -5 },
        { question: "Solve: 25 + (-8) + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "30", consequence: -5 },
        { question: "Solve: 25 + 12 + 7 + (-5) + 10 + (-2) + 6 + (-3)", answer: "50", consequence: -5 },
        { question: "Solve: 18 + (-7) + 11 + (-4) + 9 + (-2) + 8 + (-1)", answer: "32", consequence: -5 },
        { question: "Solve: 30 + (-10) + 20 + 8 + 10 + (-5) + 7 + 6", answer: "66", consequence: -5 },
        { question: "Solve: 18 + (-9) + 8 + 10 + 12 + (-6) + 9 + (-3)", answer: "39", consequence: -5 },
        { question: "Solve: 25 + (-12) + 18 + (-5) + 8 + (-2) + 10 + (-6)", answer: "36", consequence: -5 },
    ],
    95: [{ question: "Solve: 6115 x (-80) + 273 + (-15) x 0 x (-2) x 600 x (-143)", answer: "0", consequence: -5 },
        { question: "Solve: 250 x (-48) + 517 + (-5) x 10 x (-2) x 0 + 9", answer: "9", consequence: -5 },
        { question: "Solve: 952 x (-342) x 0 x 513 x (-30) + (-12) + 6", answer: "-12", consequence: -5 },
        { question: "Solve: 8115 x 0 + 273 + (-15) x 480 x 0 x 600 x (-143)", answer: "0", consequence: -5 }
    ],
    96: [{ question: "Solve: 10 + (-20) + 15 + (-8) + (-5) + 12 + (-4) + (-3)", answer: "-3", consequence: -5 },
        { question: "Solve: 15 + (-25) + 12 + (-18) + (-10) + 6 + (-4) + (-7)", answer: "-31", consequence: -5 },
        { question: "Solve: 25 + (-45) + 15 + (-10) + (-7) + 5 + (-8) + (-9)", answer: "34", consequence: -5 },
        { question: "Solve: 20 + (-50) + 10 + (-8) + (-15) + 5 + (-7) + (-9)", answer: "54", consequence: -5 }
    ],
    97: [{ question: "Solve: 30 + (-40) + 12 + (-20) + (-8) + 4 + (-10) + (-5)", answer: "-37", consequence: -5 },
        { question: "Solve: 15 + (-25) + 12 + (-18) + (-10) + 6 + (-4) + (-7)", answer: "-31", consequence: -5 },
        { question: "Solve: 25 + (-45) + 15 + (-10) + (-7) + 5 + (-8) + (-9)", answer: "34", consequence: -5 },
        { question: "Solve: 20 + (-50) + 10 + (-8) + (-15) + 5 + (-7) + (-9)", answer: "54", consequence: -5 },
        { question: "Solve: 30 + (-10) + 20 + 8 + 10 + (-5) + 7 + 6", answer: "66", consequence: -5 },
        { question: "Solve: 18 + (-9) + 8 + 10 + 12 + (-6) + 9 + (-3)", answer: "39", consequence: -5 },
        { question: "Solve: 25 + (-12) + 18 + (-5) + 8 + (-2) + 10 + (-6)", answer: "36", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 }
    ],
    98: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 }
    ],
    99: [{ question: "Simplify: -12 + 7 x (-3) + (-14) - 10", answer: "-57", consequence: -5 },
        { question: "Simplify: -15 + 5 × (-2) + (-8) - 4", answer: "-37", consequence: -5 },
        { question: "Simplify: 20 - 3 × (-4) + (-5) + 6", answer: "33", consequence: -5 },
        { question: "Simplify: -10 + 6 × (-3) + 9 - 7", answer: "-26", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Solve: 7 + (-9) + 4 + (-2) + 1 + (-3)", answer: "-2", consequence: -5 },
        { question: "Solve: 1 + (-2) + 3 + (-4) + 5 + (-6)", answer: "-3", consequence: -5 },
        { question: "Solve: -5 + 6 + (-7) + 2 + 8 + (-3)", answer: "1", consequence: -5 },
        { question: "Simplify: 30 - 7 × (-5) + (-3) - 2", answer: "60", consequence: -5 },
        { question: "Simplify: -22 + 4 × (-6) + 10 - 9", answer: "-45", consequence: -5 },
        { question: "Solve: (-4) x (-2) x (-3) + 50", answer: "26", consequence: -5 },
        { question: "Solve: (-5) x (-7) x 2 + 30", answer: "100", consequence: -5 },
        { question: "Solve: (-6) x 8 x (-2) + 100", answer: "196", consequence: -5 },
        { question: "Solve: 3 x (-5) x (-4) + 60", answer: "120", consequence: -5 },
        { question: "Solve: (-8) x (-2) x 4 + 25", answer: "89", consequence: -5 },
        { question: "Solve: (-3) x (-9) x (-2) + 40", answer: "-14", consequence: -5 },
        { question: "Solve: 7 x (-6) x (-1) + 15", answer: "57", consequence: -5 },
        { question: "Solve: (-10) x 5 x (-3) + 20", answer: "170", consequence: -5 }
    ],
    
    
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
        11: { question: "Negative tiles! -3", answer: "8x", consequence: -3 },
        13: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        21: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        27: { question: "Negative tiles! -10", answer: "8x", consequence: -10 },
        36: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        44: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        54: { question: "Negative tiles! -2", answer: "8x", consequence: -2 },
        65: { question: "Negative tiles! -5", answer: "8x", consequence: -5 },
        81: { question: "Negative tiles! -6", answer: "8x", consequence: -6 },
        89: { question: "Negative tiles! -2", answer: "8x", consequence: -2 }
    };
    const positiveTiles = {
        4: { question: "Positive tiles! +10", answer: "8x", consequence: 10 },
        17: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        25: { question: "Positive tiles! +1", answer: "8x", consequence: 1 },
        30: { question: "Positive tiles! +3", answer: "8x", consequence: 3 },
        39: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        49: { question: "Positive tiles! +10", answer: "8x", consequence: 10 },
        56: { question: "Positive tiles! +1", answer: "8x", consequence: 1 },
        64: { question: "Positive tiles! +4", answer: "8x", consequence: 4 },
        71: { question: "Positive tiles! +8", answer: "8x", consequence: 8 },

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
                play("p2", "p2sum", 50, 0);
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
                    play("p2", "p2sum", 50, 0); // Recalculate position after moving back
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
                    play("p2", "p2sum", 50, 0); // Recalculate position after moving back
                }
            };
        }
        sum = p2sum



    }


    document.getElementById(`${player}`).style.transition = `linear all .5s`



const cellWidth = 134.5;
const cellHeight = 55;

    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Player 1 Won !!")
        }
        else if (player == 'p2') {
            alert("Player 2 Won !!")
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
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * cellHeight - correction}px`;
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * cellHeight - correction}px`;

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * cellHeight - correction}px`;
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * cellHeight - correction}px`;
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
        document.getElementById('tog').innerText = "Player 5 Turn : "
        play('p1', 'p1sum', 0, num)

    }

    else if (tog % 2 == 0) {
        document.getElementById('tog').innerText = "Player 6 Turn : "

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



}

const smallScreenQuery = window.matchMedia('(max-height: 750px)');
const largeScreenQuery = window.matchMedia('(max-height: 1000px)');


if (smallScreenQuery.matches) {
    small();
  } else if (largeScreenQuery.matches) {
    large();
  }

  smallScreenQuery.addEventListener('change', (e) => {
    if (e.matches) {
        small();
    }
  });
  largeScreenQuery.addEventListener('change', (e) => {
    if (e.matches) {
        large();
    }
  });