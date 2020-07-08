import Stack from "../stack";


function reversString(str: String){
    let stack = new Stack();
    for (const charIndex in str) {
        stack.push(str[charIndex])
    }

    let stringRevered = '';
    while(!stack.isEmpty()){
        stringRevered += stack.pop()
    }

    return stringRevered;
}

export default reversString;