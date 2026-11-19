/**
 * 4. Character Count
 * Counts how many times a specific character appears in a string.
 */
function countCharacter(text, character, caseSensitive = true) {
  if (typeof text !== 'string' || typeof character !== 'string') {
    throw new Error("Inputs must be strings.");
  }

  const targetText = caseSensitive ? text : text.toLowerCase();
  const targetChar = caseSensitive ? character : character.toLowerCase();

  let count = 0;
  for (let i = 0; i < targetText.length; i++) {
    if (targetText[i] === targetChar) {
      count++;
    }
  }

  return count;
}

// Test cases
console.log('countCharacter("javascript", "a"):',
countCharacter("javascript", "a"));               // 2
console.log('countCharacter("JavaScript", "j", false):', 
countCharacter("JavaScript", "j", false)); // 1
console.log('countCharacter("JavaScript", "j", true):', 
countCharacter("JavaScript", "j", true));   // 0
