const reverseWords = str => str.split(" ").reverse().join(" ");
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const findSmallestNumber = numbers => Math.min(...numbers);
const reverseWords = str => str.split(" ").reverse().join(" ");
26 / 48,27,31

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
banana + false
const removeDuplicates = array => Array.from(new Set(array));
