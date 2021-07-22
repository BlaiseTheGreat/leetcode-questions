

function bestSum(target, array, memo = {}) { // with memoization
    if (target in memo) {
        return memo[target];
    }
    if (target === 0) {
        return [];
    }
    if (target < 0) {
        return null;
    }

    let shortest = null;
    for (const num of array) {
        const remainder = target - num;
        let curr = bestSum(remainder, array, memo);
        if (curr !== null) {
            curr = [...curr, num];
            if (shortest === null || curr.length < shortest.length) {
                shortest = curr;
            }
        }
    }
    memo[target] = shortest;
    return memo[target];
}

console.log("bestSum() results: ");
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
console.log("@@@@@@@@@@@@@@@@@@@@@@");

// write a function that takes in a target string and an array of substrings,
// and determines if the target string can be made by adding together
// elements from the substring array

function canConstruct(target, array, memo = {}) {
    if (target in memo) {
        return memo[target];
    }
    if (target === '') {
        return true;
    }

    for (str of array) {
        if (str.length <= target.length) {
            if (str === target.slice(0, str.length)) {
                const res = canConstruct(target.slice(str.length), array, memo);
                if (res === true) {
                    memo[target] = true;
                    return memo[target];
                }
            }
        }
    }
    memo[target] = false;
    return memo[target];
}

console.log("canConstruct() results: ");
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); //false



////////////////////////////////////////////////////////////////////////////////////////////


function countConstruct(target, array, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let ways = 0;
    for (str of array) {
        if (str.length <= target.length) {
            if (str === target.slice(0, str.length)) {
                ways += countConstruct(target.slice(str.length), array, memo);
            }
        }
    }
    memo[target] = ways;
    return memo[target];
}

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("countConstruct() results: ");
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // 1
console.log(countConstruct('a', [])); // 0
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // 0
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); //0



////////////////////////////////////////////////////////////////////////////

function allConstruct(target, array, memo = {}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    let result = [];
    for (const str of array) {
        if (target.indexOf(str) === 0) {
            const res = allConstruct(target.slice(str.length), array, memo);
            const newRes = res.map(x => [str, ...x]);
            result.push(...newRes);
        }
    }
    memo[target] = result;
    return result;
}



console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("allConstruct() results: ");
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));



////////////////////////////////////////////////////////////////////////////////


function fibTab(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
     
    let result = [0, 1];
    for(let i = 2; i <= n; i++) {
        result.push(result[i-2] + result[i - 1]);
    }
    return result[result.length - 1];
}

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("fibTab() results: ");
console.log(fibTab(9)); // 34
console.log(fibTab(6)); // 8




////////////////////////////////////////////////////////////////////////////////


function gridTravelerTab(width, height) {
     
}







console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
console.log("gridTraveler() results: ");
console.log(gridTravelerTab(3, 3)); // 6





















