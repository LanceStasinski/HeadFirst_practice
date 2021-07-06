const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
                34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
                46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]

const costs = [.25, .27, .25, .25, .25, .25,
               .33, .31, .25, .29, .27, .22,
               .31, .25, .25, .33, .21, .25,
               .25, .25, .28, .25, .24, .22,
               .20, .25, .30, .25, .24, .25,
               .25, .25, .27, .25, .26, .29]


const printAndGetHighScore = (scores) => {
  let highScore = 0;
  for (let i = 0; i < scores.length; i++) {
    console.log(`Solution ${[i]} score: ${scores[i]}`)
    if (scores[i] > highScore) {
      highScore = scores[i]
    }
  }
  return highScore;
}

const getHighestScores = (scores, highScore) => {
  let highestScores = []
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      highestScores.push(i)
    }
  }
  return highestScores;
}

const highScore = printAndGetHighScore(scores)
const highestScores = getHighestScores(scores, highScore)
console.log(`Tests: ${scores.length}`)
console.log(`Highest score: ${highScore}`)
console.log(`Solutions with the highest scores: ${highestScores}`)