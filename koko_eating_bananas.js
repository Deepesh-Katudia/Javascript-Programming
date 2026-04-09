/*
Problem: Koko Eating Bananas

You are given:

an array piles where piles[i] is the number of bananas in the i-th pile
an integer h, the total number of hours available
Koko chooses an eating speed k bananas per hour.

Rules:
in one hour, she chooses only one pile
she eats up to k bananas from that pile
if the pile has fewer than k, she finishes it and stops for that hour
she cannot continue into another pile in the same hour
Return the minimum integer k such that Koko can finish all bananas within h hours.

Example 1
piles = [1,4,3,2]
h = 9

Output:
2

Why?

If k = 1:

pile 1 → 1 hour
pile 4 → 4 hours
pile 3 → 3 hours
pile 2 → 2 hours

Total:

1 + 4 + 3 + 2 = 10 hours

That is too much.

If k = 2:

pile 1 → ceil(1/2) = 1
pile 4 → ceil(4/2) = 2
pile 3 → ceil(3/2) = 2
pile 2 → ceil(2/2) = 1

Total:

1 + 2 + 2 + 1 = 6 hours

That fits inside h = 9.

So answer is:
2
*/

function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / mid);
        } 
        if (hours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

// Test case
console.log(minEatingSpeed([1,4,3,2], 9)); // Output: 2


