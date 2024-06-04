

const reverseStr = (stringVal) => {
    let newStringReversed= stringVal.split("").reverse().join("");
    return `Input: ${stringVal} \n Output: ${newStringReversed}`;
}

const transformToASCII = (stringVal) =>{
    let stringToArray = stringVal.split("");
    const transformed= stringToArray.map((element) => {
    return element.charCodeAt(0);
    }); 
    return `Input: ${stringVal} \n Output:  ${transformed.join(" ")}`;
}

const transformString = (stringChars) => {

    if (stringChars?.length % 3 == 0 && stringChars?.length % 5 != 0)  {
        console.log( reverseStr(stringChars) )
    } else if (stringChars?.length % 5 == 0 && stringChars?.length % 3 != 0) {
        console.log(transformToASCII(stringChars) )
    }else if (stringChars?.length % 5 == 0 && stringChars?.length % 3 == 0){
        console.log(reverseStr(stringChars) )
        console.log(transformToASCII(stringChars) )
    } 
};


let stringValue = "Hamburger";

transformString(stringValue);