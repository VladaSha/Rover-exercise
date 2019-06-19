let rover = {
  direction: 'N',
  x: 3,
  y: 3,
  travellog: [], 
};

function turnLeft(){
  switch (rover.direction) {
    case 'S': rover.direction = 'E';
    break;
    case 'E': rover.direction = 'N';
    break;
    case 'W': rover.direction = 'S';
    break;
    default: rover.direction = 'W';
  }
}

function turnRight(){
  switch (rover.direction) {
    case 'S': rover.direction = 'W';
    break;
    case 'E': rover.direction = 'S';
    break;
    case 'W': rover.direction = 'N';
    break;
    default: rover.direction = 'E';
  }
}

function moveForward(){
  if (rover.direction === 'S') {
    if (rover.y === 9) {
      console.log("You can't move outside the board!");
    } else {
      rover.y += 1;
    }
  }
  
  if (rover.direction === 'N') {
    if (rover.y === 0) {
      console.log("You can't move outside the board!");
    } else {
      rover.y -= 1;
    }
  }

  if (rover.direction === 'W') {
    if (rover.x === 0) {
      console.log("You can't move outside the board!")
    } else {
      rover.x -= 1;
    }
  }

  if (rover.direction === 'E') {
    if (rover.x === 9) {
      console.log("You can't move outside the board!")
    } else {
      rover.x += 1;
    }
  }
}

let list = 'fflflf'
function runList() {
  for (let i = 0; i < list.length; i++) {
    switch(list[i]) {
      case 'r': turnRight();
      break;
      case 'l': turnLeft();
      break;
      case 'f': moveForward();
      break;
    }
    rover.travellog.push(`(${rover.x},${rover.y})`);
  }
  console.log(`Your current position is (${rover.x},${rover.y})`);
}
console.log(rover.travellog);
