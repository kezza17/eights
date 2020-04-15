const gridWidth = 100
const gridHeight = 110
let gridCenter = []
for (let i=0; i<52; i++) {
  if (i === 6) {
    gridCenter[i] = {
      x1: 10 + gridWidth*i,
      y1: 10 ,
      x2: 10 + gridWidth*i,
      y2: 96
    }
  } else if (i === 19) {
      gridCenter[i] = {
        x1: 10 + gridWidth*(i-13),
        y1: 10 + gridHeight, 
        x2: 10 + gridWidth*(i-13),
        y2: 106 + gridHeight 
      }
  } else if (i === 32) {
      gridCenter[i] = {
        x1: 10 + gridWidth*(i-26),
        y1: 10 + gridHeight*2,
        x2: 10 + gridWidth*(i-26),
        y2: 116 + gridHeight*2
      }
  } else if (i === 45) {
      gridCenter[i] = {
        x1: 10 + gridWidth*(i-39),
        y1: 10 + gridHeight*3,
        x2: 10 + gridWidth*(i-39),
        y2: 126 + gridHeight*3
      }
  } else if (i === 0) {
    gridCenter[i] = {
      x1: 0,
      y1: 5 + gridHeight*4,
      x2: 10,
      y2: 10
    }
  } else if (i<13) {
    gridCenter[i] = {
      x1: 0,
      y1: 5 + gridHeight*4,
      x2: 10 + gridWidth*i,
      y2: 10
    }
  } else if (i<26) {
    gridCenter[i] = {
      x1: 0,
      y1: 5 + gridHeight*4,
      x2: 10 + gridWidth*(i-13),
      y2: 20 + gridHeight 
    }
  } else if (i<39) {
    gridCenter[i] = {
      x1: 0,
      y1: 5 + gridHeight*4,
      x2: 10 + gridWidth*(i-26),
      y2: 30 + gridHeight*2
    }
  } else if (i<52) {
    gridCenter[i] = {
      x1: 0,
      y1: 5 + gridHeight*4,
      x2: 10 + gridWidth*(i-39),
      y2: 40 + gridHeight*3
    }
  }  
}

const Coordinates = () => {
  return gridCenter
}

export default Coordinates;