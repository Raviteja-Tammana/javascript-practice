/**
 * Problem 15: Ternary Operator
 * 
 * Given a grade, return "Pass" if it is at least 60 or fail if it is below 60.
 * Use a ternary operator.
 * 
 * @example 79 -> "Pass"
 * @example 54 -> "Fail"
*/
function problem(grade) {
    let result;
    let didPass = true;
    if (grade >= 60) {
        didPass = true;
    } else {
        didPass = false;
    }
    result = didPass ? 'Pass' : 'Fail'
    return result;
}

const tests = [
    [79, "Pass"],
    [54, "Fail"],
    [60, "Pass"],
    [100, "Pass"],
    [0, "Fail"]
]

module.exports = {problem, tests};