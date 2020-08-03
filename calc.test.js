const calc = require('./calc');

const calculator = calc.getCalcurator;
const calculator2 = calc.getCalcurator;
const calculator3 = calc.getCalcurator;

// 맨 처음에 1회 호출
beforeAll(() => {
    calculator.clear();
});

// 맨 마지막에 1회 호출
afterAll(() => {
    calculator.clear();
});

describe('계산기의 Closure test', () => {
    test('동일 형상 테스트', () => {
        expect(calculator).toEqual(calculator2);
        expect(calculator2).toEqual(calculator3);
        expect(calculator3).toEqual(calculator);
    });

    test('동일 형상 테스트 - 연산', () => {
        expect(calculator3.plus(100)).toEqual(100);
        expect(calculator2.getValue()).toEqual(100);
    });
});

describe('계산기의 사칙연산 테스트', () => {
    beforeEach(() => {
        calculator.clear();
    });

    afterEach(() => {
        calculator.clear();
    });

    test('clear test', () => {
        expect(calculator.getValue()).toEqual(0);   // 0
    });

    it('operations test', () => {
        expect(calculator.plus(10)).toEqual(10);    // 10 = 0 + 10
        expect(calculator.minus(5)).toEqual(5);     // 5 = 10 - 5
        expect(calculator.times(5)).toEqual(25);    // 25 = 5 * 5
        expect(calculator.getValue()).toEqual(25);  // 25 = 5 * 5
    });
});
