let start;
let destination;
let blocksFromStart;
let feetFromStart;
let feetTravelled;
let price;

function distanceFromHqInBlocks(destination) {
    start = 42
    if (destination > start) {
        blocksFromStart = (destination - start)
    } else {
        blocksFromStart = (start - destination)
    }
    return blocksFromStart
};

function distanceFromHqInFeet(destination) {
    start = 42
    if (destination > start) {
        feetFromStart = ((destination - start) * 264)
    } else {
        feetFromStart = ((start - destination) * 264)
    }
    return feetFromStart
};

function distanceTravelledInFeet(start, destination) {
    if (destination > start) {
        feetTravelled = ((destination - start) * 264)
    } else {
        feetTravelled = ((start - destination) *264)
    }
    return feetTravelled
};

function calculatesFarePrice(start, destination) {
    if (destination > start) {
        feetTravelled = ((destination - start) * 264)
    } else {
        feetTravelled = ((start - destination) *264)
    }
    if (feetTravelled <= 400) {
        price = 0
    } else if (feetTravelled <= 2000) {
        price = ((feetTravelled - 400) * 2 / 100)
    } else if (feetTravelled <2500) {
        price = 25
    } else {
        price = 'cannot travel that far'
    }
    return price
};
