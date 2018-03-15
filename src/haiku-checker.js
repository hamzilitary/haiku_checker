function Solution(haiku) {
  this.haiku = haiku;
}

exports.solutionModule = Solution;

Solution.prototype.countWords = function() {
  let arr = this.haiku.split(" ").length;
  // console.log(arr);
  return arr;
};

Solution.prototype.countNextConsonants = function() {
  let arr = this.haiku.split(" ").length;
  console.log("Words: " + arr);
  let consts = this.haiku.match(/[qwrtypsdfghjklzxcvbnm]{2,}/g);
  console.log("2 consonants list: " + consts);
  console.log("2 consonants #: " + consts.length);
  return consts.length;
};


Solution.prototype.countVowels = function() {
  let arr = this.haiku.split(" ").length;
  let consts = this.haiku.match(/[aeiou]/g);
  console.log("Words: " + arr);
  console.log("vowels list:" + consts);
  return consts.length;
};
