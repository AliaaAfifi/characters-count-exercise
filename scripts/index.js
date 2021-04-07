
const calculateCharacters = () => {

    const sentence = document.getElementById('sentence').value;

    var charactersCount = 0;
    var wordsCount = 0;
    var vowelsCount = 0;

    const sentenceArray = [...sentence.toLowerCase()];

    for(var i = 0; i < sentenceArray.length; i++) {
        switch(sentenceArray[i]) {
            case 'a':
            case 'e':
            case 'o':
            case 'i':
            case 'u':
                charactersCount++;
                vowelsCount++;
                break;
            case ' ':
                wordsCount++;
                break;
            case '.':
                charactersCount++;
                wordsCount++;
                break;
            default:
                charactersCount++;
                break;
        }
    } 

    if (sentenceArray[sentenceArray.length - 1] != '.') {
        if (charactersCount > 0)
            wordsCount++;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    const r1 = document.createElement('h2');
    r1.innerHTML = `Number of characters: ${charactersCount}`;

    const r2 = document.createElement('h2');
    r2.innerHTML = `Number of words: ${wordsCount}`
    
    const r3 = document.createElement('h2');
    r3.innerHTML = `Number of vowels: ${vowelsCount}`
    
    resultDiv.appendChild(r1);
    resultDiv.appendChild(r2);
    resultDiv.appendChild(r3);
}