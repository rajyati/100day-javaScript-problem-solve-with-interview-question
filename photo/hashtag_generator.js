//*-------------------------------
//* Programing Question: Hash Tag Generator 

//*----------------------------------------

//? You are required to implement a funcation generatorHash that generates a hash tag from  input string .
//? the hash tag should be constructed as follows 
//? the input string should be converted to a hash tag fromat , write each word is capitalized and concatenated together without spaces 
//? If the length of the input string is greaer then 280 characters or if the input string is empty or contains only whitespace , thr fuction should retrun false .
//? Otherwise , the function should retrun the generated hash tag prefixed with #

//* Write a function generateHash to accomplish this task 

const generateHash =(str) => {
    if(str.length > 280 || str.trim().length ==0){
        return false;
    }
    str = str.split(" ");
    console.log(str[1].toUpperCase());
};


console.log(generateHash("my name is yati raj"));
//o/p = "#MyNameYatRaj"