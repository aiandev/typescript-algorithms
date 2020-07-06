
export interface ICompareFunction
{
    (a: Number | String, b: Number | String): Number;
};

export default class Comparator {
  
    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    private compare (a: Number | String, b: Number | String) : Number {
      if (a === b) {
        return 0;
      }
  
      return a < b ? -1 : 1;
    }
  
    /**
     * Checks if two variables are equal.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a: Number, b : Number) {
      return this.compare(a, b) === 0;
    }
  
    /**
     * Checks if variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a: Number, b : Number): Boolean {
      return this.compare(a, b) < 0;
    }
  
    /**
     * Checks if variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a: Number, b: Number): Boolean {
      return this.compare(a, b) > 0;
    }
  
    /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a: Number, b: Number) {
      return this.lessThan(a, b) || this.equal(a, b);
    }
  
    /**
     * Checks if variable "a" is greater than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a: Number, b: Number): Boolean{
      return this.greaterThan(a, b) || this.equal(a, b);
    }
  }