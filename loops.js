function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array.push(`I am a ${i} strange loop${i === 0 ? '' : 's'}`)
  }
}
