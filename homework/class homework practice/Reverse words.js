function reverseWords(str){
    const words = str.split(" ")
    const revwords = words.reverse()
    return revwords.join(" ")
    
  }

  //what were doing is taking the string and saying that `words` is going to = the string "str.split(" ")" split up into an array of individual words
  // we then are stating that `revwords` is going to = the individual words and then reverse them with "revwords.reverse()"
  // we then are returning those reverse individual words and joining them together to make a new string "return revwords.join(" ""