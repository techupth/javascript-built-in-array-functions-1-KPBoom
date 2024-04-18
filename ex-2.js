let words = ["apple", "cat", "dog", "elephant"];

function get5CharWords(words) {
  // Start coding here
  return words.filter(char5) ;
}
function char5(a){
  return a.length >=5;
}
const result = get5CharWords(words);

console.log(result); // Output: ["apple", "elephant"]
