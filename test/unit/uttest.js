const chai = require("chai");
const expect = chai.expect;

describe('Array', function() {
    it('should start empty', function() {
        var arr = [];
        expect(arr.length).to.be.eq(0);
    });
});

describe('random function', () => {
    let getUniqRandGenNums = numOfPars => {
        let randomsNumbers = [];
        let params = [[], [5], [1, 10]][numOfPars];
        for (var i = 0; i < 10000; i++) {
            randomsNumbers.push(random(...params));
        }
        randomsNumbers = [...new Set(randomsNumbers)];
        let minRandom = min(randomsNumbers); // I implemented min
        let maxRandom = max(randomsNumbers); // I implemented max
        return {
            randomsNumbers,
            minRandom,
            maxRandom
        }
    }
    describe('no patameters passed', () => {
        let result = getUniqRandGenNums(0);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        let randomsNumbers = result.randomsNumbers;
        it('should generate different numbers', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 1);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 1);
        });
    });
    describe('one patameter passed', () => {
        let result = getUniqRandGenNums(1);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        let randomsNumbers = result.randomsNumbers;
        it('should generate different numbers', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(0, 5);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(0, 5);
        });
    });
    describe('two patameters passed', () => {
        let result = getUniqRandGenNums(2);
        let minRandom = result.minRandom;
        let maxRandom = result.maxRandom;
        let randomsNumbers = result.randomsNumbers;
        it('should generate different numbers', () => {
            expect(randomsNumbers.length).to.be.above(1);
        });
        it('should not generate a number below the lower bound', () => {
            expect(minRandom).to.be.within(1, 10);
        });
        it('should not generate a number above the upper bound', () => {
            expect(maxRandom).to.be.within(1, 10);
        });
    });
});

describe('Equality', function() {
    it('should be equal to 10', function() {
        var num = 10;
        expect(num).to.be.eq(10);
    })});
    
describe('Test1', function() {
it('should be equal to 10', function() {
    var num = 10;
   // var num = Math.floor((Math.random() * 10) + 1);
    expect(num).to.be.eq(10);
})});
    
    describe('Test2', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
        describe('Test3', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
            describe('Test32', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                describe('Test35', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                    describe('Test123', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                        describe('Test12', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
describe('Equality12', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                                describe('Equality45', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                                    describe('Equality1', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                                        describe('Equality452', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
                                            describe('Equality234', function() {
it('should be equal to 10', function() {
    var num = 10;
    expect(num).to.be.eq(10);
})});
       
