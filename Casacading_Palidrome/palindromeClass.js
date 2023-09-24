// the CascadingPalindrome class takes an input string that contains various components separated by spaces
class CascadingPalindrome {
  constructor(input) {
      this.input = input;
  }

  // a method findCascadingPalindrome that processes the components to identify and return the palindrome components
  findCascadingPalindrome() {
      const components = this.input.split(' ');
      const palindromeComponents = components.filter(component => this.isPalindrome(component));
      return palindromeComponents.join(' ');
  }

  // The isPalindrome method checks if a given string is a palindrome by removing 
  // non-alphanumeric characters and comparing it to its reversed version
  isPalindrome(str) {
      const cleanedStr = str.replace(/\W/g, '').toLowerCase(); // Remove non-alphanumeric characters and convert to lowercase
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
  }
}

// Test cases
const input1 = "1230321";
const input2 = "1230321 09234 0124210";
const input3 = "abcd5dcba 1230321 09234 0124210";

const cp1 = new CascadingPalindrome(input1);
console.log(cp1.findCascadingPalindrome());  //output: 1230321

const cp2 = new CascadingPalindrome(input2);
console.log(cp2.findCascadingPalindrome()); //output: 1230321 0124210

const cp3 = new CascadingPalindrome(input3);
console.log(cp3.findCascadingPalindrome()); //output: abcd5dcba 1230321 0124210
