/*
Encode and Decode Strings (Medium)

Problem
Design two functions:
encode(strs) → converts a list of strings into one single string
decode(s) → converts that encoded string back into the original list
The decoded output must be exactly the same as the original input.

Why this problem is tricky
Strings can contain:
-letters
-numbers
-spaces
-symbols
-even empty strings 
-So you cannot safely just join with a normal separator like "," or "#".

Example:
["ab#c", "de"]
If you join with #, decoding becomes confusing.
So we need a method that works for all possible characters.

For every string, store:
length + "#" + actualString

Example:

"Hello" -> "5#Hello"
"World" -> "5#World"

Combined:
"5#Hello5#World"
Now decoding is easy:
read digits until #
that tells you the length of the next string
take exactly that many characters
This works even if the string contains #, spaces, or symbols.
*/


class Codec {
    encode(strs) {
        let result = "";

        for (let str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            let j = i;

            while (s[j] !== "#") {
                j++;
            }

            const length = Number(s.slice(i, j));
            const str = s.slice(j + 1, j + 1 + length);

            result.push(str);
            i = j + 1 + length;
        }
        return result;
    }
}


// Example usage:
const codec = new Codec();
const original = ["Hello", "World", "This is a test!", ""];
const encoded = codec.encode(original);
console.log("Encoded:", encoded);

const decoded = codec.decode(encoded);
console.log("Decoded:", decoded);


