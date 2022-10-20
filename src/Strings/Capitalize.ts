/**
 * This function will capitalize the first letter of a sentence or a word
 * @param text - The text to be capitalized
 * @returns A new string
 */
export function capitalize(text: string): string {
  if (text != "") {
    let newString = "";
    for (let i = 0; i < text.length; i++) {
      if (i == 0 && isLowerCase(text[i])) {
        newString += text[i].toUpperCase();
      } else {
        newString += text[i];
      }
    }

    return newString;
  } else {
    return "";
  }
}

function isLowerCase(char: string): boolean {
  return char == "a" || char == "b" || char == "c" || char == "d" ||
    char == "e" || char == "f" || char == "g" || char == "h" || char == "i" ||
    char == "j" || char == "k" || char == "l" || char == "m" || char == "n" ||
    char == "o" || char == "p" || char == "q" || char == "r" || char == "s" ||
    char == "t" || char == "u" || char == "v" || char == "w" || char == "x" ||
    char == "y" || char == "z";
}
