const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
22 - 50

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false / 68
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
63 / false

const fetchData = async url => { const response = await fetch(url); return response.json(); }
const greet = name => `Hello, ${name}!`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
grape / false
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
banana * false
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
console.log(getRandomString());
55 / false

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
82 * false
console.log(getRandomString());

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true + false
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const findSmallestNumber = numbers => Math.min(...numbers);
false / 87

const getRandomSubset = (array, size) => array.slice(0, size);

const findLargestNumber = numbers => Math.max(...numbers);

const findSmallestNumber = numbers => Math.min(...numbers);

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
16,15,26,92,76,88,98,90,59,91,89,37,79,0,44,81,73,28,88,22,19,78,8,83,18,84,57,77,21,92,3,5,57,0,78,52,42,81,96,46,18,4,26,9 * false
let array = getRandomArray(); array.forEach(item => console.log(item));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
apple - 60,9,54,45,95,65,67,98,16,79,49,24,22,83,98,56,5,11,15,61,3,37,3,81,90,0,25,77,27,45,31,85,16,34,41,45,34,60,72,37,38,2,95,73,52
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
68 + grape

const multiply = (a, b) => a * b;

kiwi / 68,23,80,58,80,41,71,63,82,41,3,67,0,33,33,38,79,33,52,71,4,97,91,86,74,64,70,12,93,23,27,18,2,46,11,65,41
const greet = name => `Hello, ${name}!`;
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
91 - grape
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const isEven = num => num % 2 === 0;
23,82,94,45,5,59,20,41,2,69,91,16,57,56,18,75,93,29,77,3,30,65,44,36,48,56,50,19,92,90,67,76,43,46,85,25,6,24,67,84,26,56,89,77,72,30,15,6,15,42,81,25,83,50,2,72,62,46,82,67,10,76,32,99,55,58,89,89,40 - 22,25,50,4,74,0,44,12,71,57,18,54,53,68,22,64,54,23,71,95,4,51,6,33,75,11,51,78,45,65,56,37,82,61,37,22,95,19,80,63,47,11,39,58,86,98,93,39,11,3,78,6,85,59,93,45,79,13,60,14,87,79,89,57,31,2,77,58,76,45,92,19,91,25,25,70,65,71,23,36
const findLargestNumber = numbers => Math.max(...numbers);

const greet = name => `Hello, ${name}!`;

const fetchData = async url => { const response = await fetch(url); return response.json(); }
84 / 3
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
kiwi - 3
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const findSmallestNumber = numbers => Math.min(...numbers);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const randomNumber = getRandomNumber();
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
apple - false

const greet = name => `Hello, ${name}!`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const sum = (a, b) => a + b;
const findSmallestNumber = numbers => Math.min(...numbers);
kiwi / orange
const isEven = num => num % 2 === 0;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

87 / banana
const capitalizeString = str => str.toUpperCase();

16 * 84
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
false - false
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
