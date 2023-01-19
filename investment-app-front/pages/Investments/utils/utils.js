export const makeEmptyArr  = (arrLength) =>{
    const foo = [];
    for (let i = 1; i<=arrLength;i++){
        foo.push(i);
    }
    return foo;
};

export const makePagination = (arrLength, maxInvOnPage) => {
    const pagination = Math.ceil(arrLength/maxInvOnPage);
    return pagination;
}