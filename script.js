function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if (s2.length === 0) {
        return 0; // If the substring is empty, return 0
    }

    const lowerCaseS1 = s1.toLowerCase();
    const lowerCaseS2 = s2.toLowerCase();

    return lowerCaseS1.indexOf(lowerCaseS2);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
