function mostVowels(string) {
    debugger;
    let words = string.split(' ');
    let mostVowels = ''
    for (let i = 0; i < words.length; i++) { //look through all words in the string
        let vowelCount = 0;
        for (let j = 0; j < words[i].length; j++) { //look through all letters in the word
            if (words[i][j] == "a" || //check to see if letter is a vowel or not
                words[i][j] == "e" ||
                words[i][j] == "i" ||
                words[i][j] == "o" ||
                words[i][j] == "u") {
                vowelCount++
            }
        }
    }
} 

mostVowels("I love a parade")