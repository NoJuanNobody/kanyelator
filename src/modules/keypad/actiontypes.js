//
export const MODE_OPERATOR = 'MODE_OPERATOR'; // SPECIAL KEYS PRESSED
export const MODE_DIGIT = 'MODE_DIGIT';
export const PRESS_ANSWER = 'PRESS_ANSWER'; // EQUALS KEY PRESSED, REFRESHES DISPLAY



//INPUT MODE
//ANSWER MODE
// RESET MODE

/** 
 * this mode is invoked when entering operators or digits.
 * in the special case that the `=` key is pressed before, 
 * input mode is replaced by reset mode, operators are not replaced
 */
export const INPUT_MODE = 'INPUT_MODE';

/** when the  '=' key is pressed the function acts as a sticky hotkey
 * the keypad modifies its functionality
 */
export const ANSWER_MODE = 'ANSWER_MODE';

/* reset mode replaces all digit keys when the '=' key is pressed*/
export const RESET_MODE = 'RESET_MODE';