// console.log("Problem 36");



function doubleBasePalindromes(n = 1000000) {
    const output = [];

    for(let i = 1; i < n; i++) {
        const stringOfNum = i.toString();
        if(isPalindrome(stringOfNum)) {
            if(isPalindrome(dec2bin(i))) {
                output.push(i);
            }
        }

    }

    return output.reduce((acc, curr) => acc + curr);
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
}

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while(left < right) {
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}


console.log(doubleBasePalindromes());

