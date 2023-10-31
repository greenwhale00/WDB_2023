//6면 주사위를 나타내는 die1 과 die2 라는 두 가지 변수를 제공해 드렸습니다. 각 변수는 1에서 6까지 무작위로 생성된 정수를 가지고 있습니다. 각 주사위를 던진 결과와 그 합계를 표시하는 문자열이 될 roll이라는 새 변수를 생성하세요. 다음 패턴을 따르세요.

//die1: 3
//die2: 5
//roll: "3과 5가 나왔습니다. 합계는 8입니다."


//다음은 다른 숫자를 사용하여 만든 또 다른 예입니다.

//die1: 6
//die2: 4,
//roll: "6과 4가 나왔습니다. 합계는 10입니다."



// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:

const roll = `${die1}과 ${die2}가 나왔습니다. 합계는 ${die1 + die2}입니다`