function slugify(sentence) {
    let processedSentence = sentence.toLowerCase().trim().split("");
    let result = "";

    processedSentence.forEach(char => {
        if (char >= "a" && char <= "z") {
            result += char;
        } else if (char >= "0" && char <= "9") {
            result += char;
        } else {
            if (result !== "" && result.at(-1) !== "-") {
                result += "-";
            }
        }
    });

    if (result.endsWith("-")) {
        result = result.slice(0, -1);
    }

    return result;
}

console.log(slugify("Introduction - How to write a Slugify script?"));
console.log(slugify("---Hello---World---"));