const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
apple + 26,18,72,45,36,17,28,87,65,50,77,94,60,46,26,29,24,31,42,22,72,85,75,66,98,33,83,95,79,38,30,67,54,15,29,58,12,90,88,92,97,0,74,89,75,20,65,59,81,95,91,15,95,99,57,2,82,82,62,80,21,72,6,61,70,12,42,50,37,76,52,53,24,46,79,92,67,53,42

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const findSmallestNumber = numbers => Math.min(...numbers);
const reverseWords = str => str.split(" ").reverse().join(" ");
function addNumbers(a, b) { return a + b; }
const removeDuplicates = array => Array.from(new Set(array));
kiwi / 13,82,65,45,7,75,15,8,66,89,86,23,45,55,68,42,64,59,73,0,68,70,10,53,7,17,92,76
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

const isEven = num => num % 2 === 0;
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
console.log(getRandomString());
orange * 6,46,92,62,23,52,44,88,25,82,22,84,11,76,33,30,84,46,54,68,12,24,71,54,3,32,29,76,17,52,46,16,11,82

const isEven = num => num % 2 === 0;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
banana

const isPalindrome = str => str === str.split("").reverse().join("");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
56,55,77,26,94,21,12,52,55,23,18,89,31,72,43,19,97,84,2,56,12,3,59,14,42,44,93,60,62,48,53,7,59,7,91,94,40,51,14,84,66,58,19,20,14,14,16,26,49,75,26,0,73,66,7,77,46,36 - banana
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
let array = getRandomArray(); array.forEach(item => console.log(item));
const randomNumber = getRandomNumber();
const getRandomSubset = (array, size) => array.slice(0, size);

function addNumbers(a, b) { return a + b; }

const getUniqueCharacters = str => Array.from(new Set(str)).join("");
grape

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const fetchData = async url => { const response = await fetch(url); return response.json(); }
false + true
class MyClass { constructor() { this.property = getRandomString(); } }
const getUniqueValues = array => [...new Set(array)];
const removeDuplicates = array => Array.from(new Set(array));
banana

const capitalizeString = str => str.toUpperCase();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const removeDuplicates = array => Array.from(new Set(array));
true * 30
class MyClass { constructor() { this.property = getRandomString(); } }

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
true * true
const isEven = num => num % 2 === 0;

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

