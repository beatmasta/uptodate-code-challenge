const subject = require ('.'); 
 
describe('Overlapping spreads', () => {

    it('should return sum of overlapping spreads', () => {
        expect(subject.overlappingSpreads([-3, 5, 8, -1, 6, 11])).toEqual(5);
    });

});