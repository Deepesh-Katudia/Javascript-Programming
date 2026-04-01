/*
Car Fleet

You have:
a destination at target
cars at different positions
each car has a speed

Rules:

cars move toward the same destination
a car cannot pass another car ahead of it
if a faster car catches a slower car, it must slow down and join it
that group becomes a fleet
You need to return:
how many fleets reach the destination

Example 1
target = 10
position = [1,4]
speed = [3,2]
Car 1
starts at 1
speed = 3
time to reach 10:
(10 - 1) / 3 = 3
Car 2
starts at 4
speed = 2
time to reach 10:
(10 - 4) / 2 = 3

Both reach at the same time, and the one behind catches up exactly at the destination.
So they count as 1 fleet.
*/

function carFleet(target, position, speed) {
    const cars = [];
    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }
    // sort by position ascending
    cars.sort((a, b) => a[0] - b[0]);
    let fleets = 0;
    let maxTime = 0;
    // process from nearest to destination to farthest
    for (let i = cars.length - 1; i >= 0; i--) {
        const time = cars[i][1];
        if (time > maxTime) {
            fleets++;
            maxTime = time;
        }
    }
    return fleets;
}