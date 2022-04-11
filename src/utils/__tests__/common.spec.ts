import { assert, isEmpty } from '../common';

describe('isEmpty : ', () => {
  it('[] should be empty', () => {
    expect(isEmpty([])).toBe(true);
  });
  it('[1] should not be empty', () => {
    expect(isEmpty([1])).not.toBe(true);
  });
  it('{} should be empty', () => {
    expect(isEmpty({})).toBe(true);
  });
  it(`{ name: 'Hello' } should not be empty`, () => {
    expect(isEmpty({ name: 'Hello' })).not.toBe(true);
  });
  it(`new Object() should be empty`, () => {
    expect(isEmpty(new Object())).toBe(true);
  });
  it(`'' should be empty`, () => {
    expect(isEmpty('')).toBe(true);
  });
  it(`'123' should not be empty`, () => {
    expect(isEmpty('123')).not.toBe(true);
  });
  it(`0 should be empty`, () => {
    expect(isEmpty(0)).toBe(true);
  });
  it(`1 should not be empty`, () => {
    expect(isEmpty(1)).not.toBe(true);
  });
  it(`-1 should not be empty`, () => {
    expect(isEmpty(-1)).not.toBe(true);
  });
  it(`undefined should be empty`, () => {
    expect(isEmpty(undefined)).toBe(true);
  });
  it(`null should be empty`, () => {
    expect(isEmpty(null)).toBe(true);
  });
  it(`NaN should be empty`, () => {
    // @ts-expect-error
    expect(isEmpty(5 * undefined)).toBe(true);
  });
});

describe('assert : ', () => {
  it('should throw error when condition fails', () => {
    expect(() => {
      const a = 1;
      const b = 1;
      assert(a !== b, 'Math Error');
    }).toThrowError('[g-error] Math Error');
  });

  it('should not throw error when condition passes', () => {
    expect(() => {
      assert(true, 'Error');
    }).not.toThrowError();
  });
});
