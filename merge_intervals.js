/*
Merge Intervals (Medium)

Pattern: Sorting + greedy merge
This shows up constantly in interviews because it tests:

Sorting
Careful condition checks
Greedy merging logic

Problem
Given an array of intervals intervals, where each interval is [start, end], merge all overlapping intervals and return the merged result.

Example
intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]

Another:

intervals = [[1,4],[4,5]]
Output: [[1,5]]
*/

function merge(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: sort by start
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];
    const last = merged[merged.length - 1];
    const [lastStart, lastEnd] = last;

    // Step 2: check overlap
    if (currStart <= lastEnd) {
      last[1] = Math.max(lastEnd, currEnd);
    } else {
      merged.push(intervals[i]);
    }
  }

  return merged;
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // [[1,5]]
