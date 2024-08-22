export const SpaceNumberInsertion = (number) =>{
    const strNumber = number.toString();

    const reversStr = strNumber.split("").reverse().join("");
    const insertSpaces = reversStr.match(/.{1,3}/g).join(' ');
    const backReverseStr = insertSpaces.split("").reverse().join("");

    return backReverseStr;
}