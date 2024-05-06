

//*-------------------------------------------------------------
//* Programming Question : Longest Word in a String 
//*-------------------------------------------------------------

 //? Q: Write a function findLongestWord that takes a string as input and return the longest word in the string . if there are multiple longest words ,return the first one encountered

 //* Constraints 

 //? The input string may contain alphabetic characters , digit space and punctuation 
 //? The input stirng is non-empty .
 //? the input string may multiple words separated by spaces 


 //* Note

 //? If the input string is empity or contains only whitespace , the function should return an false 
 //? The finction shound ignore and trailing whitespace when determining the longest word 

 const findLongestWord =(str) => {
    if(str.trim().length = 0){
        return false;
    }
      words = str.split(" ");
      /*words =words.sort((a,b)=> a.length-b.length);
      console.log(words);
      return words.at(-1);*/

      return words.reduce(
        (accum, curWord) => (curWord.length > accum.length ? curWord : accum),
        ""
      );
};

 console.log(
    findLongestWord("watch Just For Travlling In India on youtube")
 );