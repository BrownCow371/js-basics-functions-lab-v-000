// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  if (blockNumber >= 42) {
    return (blockNumber - 42);
  } else {
    return (42 - blockNumber);
  }
}

function distanceFromHqInFeet(blockNumber) {
  return (distanceFromHqInBlocks(blockNumber) * 264)
}

function distanceTravelledInFeet(block1, block2) {
  return ((block2 - block1)*264)
}
