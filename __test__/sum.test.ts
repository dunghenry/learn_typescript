import { sum } from '../src/sum';

describe('sum module 1', () => {
    it('add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

// describe('sum module 2', () => {
//     test('adds 1 + 2 to equal 3', () => {
//         expect(sum(1, 2)).toBe(4);
//     });
// });
