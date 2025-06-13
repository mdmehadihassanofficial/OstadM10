// ১. একটি স্ট্রিং-এ কয়টি স্বরবর্ণ আছে তা গণনা করে
// ২. একটি সংখ্যার অ্যারে ছোট থেকে বড় ক্রমে সাজায়
// ৩. একটি স্ট্রিং উল্টো করে রিটার্ন করে
// ৪. একটি অ্যারে থেকে শেষ উপাদানটি রিটার্ন করে
// ৫. দুটি অ্যারে একত্র করে একটি নতুন অ্যারে তৈরি করে
// ৬. কোনো স্ট্রিং-এ স্পেস আছে কিনা চেক করে
// ৭. স্ট্রিং খালি কিনা তা যাচাই করে
// ৮. একটি অ্যারে থেকে সব নেগেটিভ সংখ্যা বাদ দেয়

// ১. একটি স্ট্রিং-এ কয়টি স্বরবর্ণ আছে তা গণনা করে
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Your Name")); // Output: 4

// ২. একটি সংখ্যার অ্যারে ছোট থেকে বড় ক্রমে সাজায়
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([4, 1, 8, 3])); // Output: [1, 3, 4, 8]

// ৩. একটি স্ট্রিং উল্টো করে রিটার্ন করে
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"

// ৪. একটি অ্যারে থেকে শেষ উপাদানটি রিটার্ন করে
function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([10, 20, 30, 40])); // Output: 40

// ৫. দুটি অ্যারে একত্র করে একটি নতুন অ্যারে তৈরি করে
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4])); // Output: [1, 2, 3, 4]

// ৬. কোনো স্ট্রিং-এ স্পেস আছে কিনা চেক করে
function hasSpace(str) {
  return str.includes(' ');
}
console.log(hasSpace("Ostad Limited")); // Output: true

// ৭. স্ট্রিং খালি কিনা তা যাচাই করে
function isEmptyString(str) {
  return str === '';
}
console.log(isEmptyString("")); // Output: true
console.log(isEmptyString("Hello")); // Output: false

// ৮. একটি অ্যারে থেকে সব নেগেটিভ সংখ্যা বাদ দেয়
function removeNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}
console.log(removeNegativeNumbers([-5, 2, -1, 6, 0])); // Output: [2, 6, 0]
