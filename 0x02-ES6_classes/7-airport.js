// 7-airport.js
export default class Airport {
  constructor(name, code) {
    this._name = this.validateString(name, 'Name');
    this._code = this.validateString(code, 'Code');
  }

  toString() {
    return `[object ${this._code}]`;
  }

  validateString(value, fieldName) {
    if (typeof value === 'string') {
      return value;
    } else {
      throw new TypeError(`${fieldName} must be a string`);
    }
  }
}
