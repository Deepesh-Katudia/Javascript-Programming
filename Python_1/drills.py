"""
DAY 1 - Syntax reboot & arrays
==============================

How to use this file:

  1. Fill in ONE function at a time. Replace `raise NotImplementedError`
     with your code.
  2. Run it:  python3 day1.py
     You get a pass/fail line per function. Unstarted ones are skipped.
  3. Write the WHOLE function before you run. No running after every
     two lines.
  4. After each problem, say the time and space complexity OUT LOUD.
     Then write it in the docstring where it says COMPLEXITY.

Rule for today: don't look anything up until you've been stuck 25 minutes.
"""

# =============================================================================
# DRILLS - 60 min. These build muscle memory, not cleverness.
# =============================================================================


def fizzbuzz(n):
    out = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            out.append("FizzBuzz")
        elif i % 3 == 0:
            out.append("Fizz")
        elif i % 5 == 0:
            out.append("Buzz")
        else:
            out.append(str(i))
    return out


def is_prime(n):
    if n < 2:
        return False
    d = 2
    while d * d <= n:
        if n % d == 0:
            return False
        d += 1
    return True


def reverse_digits(n):
    """Reverse the digits of an integer WITHOUT converting to a string.

    Use  n % 10  to grab the last digit and  n // 10  to drop it.
    Keep the sign. Leading zeros disappear naturally.

    reverse_digits(123) -> 321
    reverse_digits(-123) -> -321
    reverse_digits(120) -> 21

    Careful: -7 // 10 is -1 in Python, not 0. Work with abs(n) and
    reapply the sign at the end.
    """
    if n < 0:
        is_negative = True
    else:
        is_negative = False

    if n < 0:
        n = -n

    result = 0

    while n > 0:
        last_digit = n % 10 # reads last digit 
        result = result * 10
        result = result + last_digit
        n = n // 10

    if is_negative:
        return -result
    else:
        return result


def second_largest(nums):
    """Return the second largest DISTINCT value, or None if there isn't one.

    Single pass. No sorting, no set().

    second_largest([3, 1, 4, 1, 5]) -> 4
    second_largest([5, 5, 4]) -> 4
    second_largest([2, 2]) -> None
    second_largest([7]) -> None
    """
    if not nums:
        return None

    largest = max(nums)
    second = None 
    for x in nums:
        if x == largest:
            continue
        if second is None:
            second = x
        elif x > second:
            second = x
    return second 


def rotate(nums, k):
    """Return a NEW list rotated right by k. Do not modify nums.

    rotate([1, 2, 3, 4, 5], 2) -> [4, 5, 1, 2, 3]

    k can be larger than len(nums) -- use k % len(nums).
    Solve it with slicing. One line is possible.
    """
    if not nums:
        return []
    k = k % len(nums)
    return nums[-k:] + nums[:-k]


def rotate_in_place(nums, k):
    """Same rotation, but modify nums IN PLACE and return None.

    The trick: reverse the whole list, then reverse the first k,
    then reverse the rest. Draw it on paper before coding.

    nums = [1, 2, 3, 4, 5]; rotate_in_place(nums, 2)
    nums is now [4, 5, 1, 2, 3]
    """
    if not nums:
        return []
    k = k % len(nums)
    nums[:] = nums[-k:] + nums[:-k]


# =============================================================================
# PROBLEMS - 120 min. Interview set. Brute force out loud FIRST.
# =============================================================================


def two_sum(nums, target):
    """Return indices [i, j] of the two numbers adding to target.

    Exactly one solution exists. Don't reuse the same element.

    two_sum([2, 7, 11, 15], 9) -> [0, 1]

    Step 1: write the O(n^2) nested loop. Run it. It passes.
    Step 2: now do it in one pass with a dict mapping value -> index.
            For each number, ask: have I already seen (target - num)?

    COMPLEXITY: time ?, space ?
    """
    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i,j]
    return[]


def max_profit(prices):
    """Max profit from one buy and one later sell. 0 if impossible.

    max_profit([7, 1, 5, 3, 6, 4]) -> 5   (buy at 1, sell at 6)
    max_profit([7, 6, 4, 3, 1]) -> 0

    One pass. Track the cheapest price seen so far and the best profit
    so far. Do NOT sort -- order carries the meaning here.

    COMPLEXITY: time ?, space ?
    """
    best = 0
    for i in range(len(prices)):
        for j in range(i+1, len(prices)):
            profit = prices[j] - prices[i]
            if profit > best:
                best = profit
    return best
         



def is_palindrome(s):
    """True if s is a palindrome considering only alphanumerics,
    ignoring case.

    is_palindrome("A man, a plan, a canal: Panama") -> True
    is_palindrome("race a car") -> False
    is_palindrome("") -> True

    Two pointers from both ends moving inward. Skip characters where
    .isalnum() is False. Do it WITHOUT building a cleaned string first
    -- that's the O(1) space version interviewers want.

    COMPLEXITY: time ?, space ?
    """
    left = 0
    right = len(s) - 1

    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1
    return True
    


def move_zeroes(nums):
    """Move all 0s to the end IN PLACE, keeping the order of non-zeros.
    Return None.

    nums = [0, 1, 0, 3, 12]  ->  [1, 3, 12, 0, 0]

    A write pointer that only advances when you place a non-zero.
    One pass to place them, then fill the rest with 0.

    COMPLEXITY: time ?, space ?
    """
    raise NotImplementedError


def max_area(height):
    """Container With Most Water. Two lines form a container; return the
    most water it can hold. Area = min(h[l], h[r]) * (r - l).

    max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) -> 49

    Two pointers at both ends. Move the SHORTER wall inward.
    Before you code: be able to say out loud why moving the shorter
    one can never lose the best answer. That reasoning IS the question.

    COMPLEXITY: time ?, space ?
    """
    raise NotImplementedError


def product_except_self(nums):
    """STRETCH. answer[i] = product of all elements except nums[i].
    Division is not allowed.

    product_except_self([1, 2, 3, 4]) -> [24, 12, 8, 6]

    Pass 1 left-to-right filling answer[i] with the product of
    everything before i. Pass 2 right-to-left multiplying in the
    product of everything after i, carried in a single variable.

    COMPLEXITY: time ?, space ?
    """
    raise NotImplementedError


# =============================================================================
# TEST RUNNER - you don't need to read or edit anything below this line.
# =============================================================================

def _run():
    def call(fn, args):
        return fn(*[a[:] if isinstance(a, list) else a for a in args])

    def inplace(fn):
        def wrapped(nums, *rest):
            data = nums[:]
            fn(data, *rest)
            return data
        return wrapped

    suites = [
        ("DRILLS", [
            ("fizzbuzz", fizzbuzz, [
                ((5,), ["1", "2", "Fizz", "4", "Buzz"]),
                ((15,), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8",
                         "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]),
                ((1,), ["1"]),
            ]),
            ("is_prime", is_prime, [
                ((1,), False), ((2,), True), ((3,), True), ((4,), False),
                ((9,), False), ((17,), True), ((0,), False), ((-5,), False),
                ((7919,), True),
            ]),
            ("reverse_digits", reverse_digits, [
                ((123,), 321), ((-123,), -321), ((120,), 21),
                ((0,), 0), ((7,), 7),
            ]),
            ("second_largest", second_largest, [
                (([3, 1, 4, 1, 5],), 4), (([5, 5, 4],), 4),
                (([2, 2],), None), (([7],), None), (([],), None),
                (([1, 2],), 1), (([-1, -2, -3],), -2),
            ]),
            ("rotate", rotate, [
                (([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]),
                (([1, 2, 3], 0), [1, 2, 3]),
                (([1, 2, 3], 4), [3, 1, 2]),
                (([1], 3), [1]),
            ]),
            ("rotate_in_place", inplace(rotate_in_place), [
                (([1, 2, 3, 4, 5], 2), [4, 5, 1, 2, 3]),
                (([1, 2, 3], 4), [3, 1, 2]),
                (([1, 2], 1), [2, 1]),
            ]),
        ]),
        ("PROBLEMS", [
            ("two_sum", two_sum, [
                (([2, 7, 11, 15], 9), [0, 1]),
                (([3, 2, 4], 6), [1, 2]),
                (([3, 3], 6), [0, 1]),
            ]),
            ("max_profit", max_profit, [
                (([7, 1, 5, 3, 6, 4],), 5),
                (([7, 6, 4, 3, 1],), 0),
                (([1],), 0), (([],), 0), (([2, 4, 1],), 2),
            ]),
            ("is_palindrome", is_palindrome, [
                (("A man, a plan, a canal: Panama",), True),
                (("race a car",), False),
                (("",), True), ((" ",), True), (("0P",), False),
                (("ab_a",), True),
            ]),
            ("move_zeroes", inplace(move_zeroes), [
                (([0, 1, 0, 3, 12],), [1, 3, 12, 0, 0]),
                (([0],), [0]), (([1, 0],), [1, 0]),
                (([0, 0, 1],), [1, 0, 0]),
            ]),
            ("max_area", max_area, [
                (([1, 8, 6, 2, 5, 4, 8, 3, 7],), 49),
                (([1, 1],), 1), (([4, 3, 2, 1, 4],), 16),
                (([1, 2, 1],), 2),
            ]),
            ("product_except_self", product_except_self, [
                (([1, 2, 3, 4],), [24, 12, 8, 6]),
                (([-1, 1, 0, -3, 3],), [0, 0, 9, 0, 0]),
                (([2, 3],), [3, 2]),
            ]),
        ]),
    ]

    done = attempted = 0
    for title, tests in suites:
        print("\n" + title)
        print("-" * 58)
        for name, fn, cases in tests:
            try:
                call(fn, cases[0][0])
            except NotImplementedError:
                print("  ....  {:<22} not started".format(name))
                continue
            except Exception:
                pass
            attempted += 1
            failure = None
            for args, expected in cases:
                try:
                    got = call(fn, args)
                except Exception as exc:
                    failure = (args, "{}: {}".format(type(exc).__name__, exc))
                    break
                if got != expected:
                    failure = (args, "got {!r}, expected {!r}".format(got, expected))
                    break
            if failure is None:
                done += 1
                print("  PASS  {:<22} {} cases pass".format(name, len(cases)))
            else:
                args, why = failure
                print("  FAIL  {:<22} {}".format(name, why))
                print("        {:<22} input was {!r}".format("", args))

    total = sum(len(t) for _, t in suites)
    print("\n" + "=" * 58)
    print("  {} / {} passing   ({} attempted, {} not started)".format(
        done, total, attempted, total - attempted))
    if done == total:
        print("  Day 1 complete. Log what fought you, then stop.")
    print("=" * 58 + "\n")


if __name__ == "__main__":
    _run()