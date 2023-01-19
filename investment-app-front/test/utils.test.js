import { makeEmptyArr, makePagination } from "../pages/Investments/utils/utils";


describe('making empty arr', () => {

    test('take 10 to make array of 10 elements', () =>{
        expect(makeEmptyArr(10)).toHaveLength(10);
    });

    test('take 312 to, make array that contain 312 value', () =>{
        expect(makeEmptyArr(312)).toContain(312);
    });

    test('take 312 to, make array that NOT contain 313 value', () =>{
        expect(makeEmptyArr(312)).not.toContain(313);
    });

})

describe('making pagination', () => {
    test('make 10 pages when divide arr of 100 elemets by 10 on every page', () => {
        expect(makePagination(100,10)).toBe(10);
    })

    test('make 12 pages when divide arr of 100 elemets by 9 on every page', () => {
        expect(makePagination(100,9)).toBe(12);
    })

    test('make 10 pages when divide arr of 100 elemets by 11 on every page', () => {
        expect(makePagination(100,11)).toBe(10);
    })


})
