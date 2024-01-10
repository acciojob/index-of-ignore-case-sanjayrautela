function indexOfIgnoreCase(str: string, subStr: string): number {
    if (subStr.length === 0) {
        return 0; // If the substring is empty, return 0
    }
    
    const lowerCaseStr = str.toLowerCase();
    const lowerCaseSubStr = subStr.toLowerCase();
    
    return lowerCaseStr.indexOf(lowerCaseSubStr);
}


// Please do not change the code below
const str = prompt("Enter s1:");
const subStr = prompt("Enter s2:");
alert(indexOfIgnoreCase(str, subStr));


