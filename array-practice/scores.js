const scores = [1, 55, 33, 23, 56, 78, 56, 89, 99, 69, 55, 54, 52, 2, 45, 23, 12,
                45, 22, 25, 69, 47, 85, 22, 99, 66, 77, 88, 66, 33, 22, 11, 44]

let output;
let highScore = 0
let highestScores = []

for (let i = 0; i < scores.length; i++) {
  console.log(`Solution ${[i]} score: ${score[i]}`)
  if (scores[i] > highScore) {
    highScore = scores[i]
  }
}

for (let i = 0; i < scores.length; i++) {
  if (scores[i] == highScore) {
    highestScores.push(i)
  }
}


nTests = scores.length
console.log(`Tests: ${ntests}`)
console.log(`Highest score: ${highScore}`)
console.log(`Solutions with the highest scores: ${highestScores}`)