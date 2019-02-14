function minimumSwaps(arr) {
    let counter = 0
      const sorted = arr.slice().sort((a, b) => a - b)

      const paired = arr.map(each => {
          let idx = sorted.indexOf(each)
          const hash = {
              num: each,
              position: idx,
              visited: false
          }
          return hash;
      })
    //   console.log('original', paired)

    for (let i = 0; i < paired.length - 1; i++) {
        let swap = paired[i]
        if (paired[i].position !== i) {
            for (let j = 1; j < paired.length; j++) {
                if (paired[j].position === i) {
                    counter++
                    paired[i] = paired[j]
                    paired[i].visited = true;
                    paired[j] = swap
                    paired[j].visited = true;
                    // console.log(paired)
                }
            }
        }
    }
    // console.log('paired', paired)
      return counter
}

  console.log(minimumSwaps([2,3,4,1,5]))
  console.log(minimumSwaps([4,3,1,2]))
  console.log(minimumSwaps([1,3,5,2,4,6,7]))


  // [1,3,4,2,5]
  // [1,2,4,3,5]
  // [1,2,3,4,5]
