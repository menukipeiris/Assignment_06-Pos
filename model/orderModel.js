export default class orderModel{
    constructor(code,price,quantity,total) {
        this._code = code;
        this._price = price;
        this._quantity = quantity;
        this._total = total;
    }

    get code() {
        return this._code;
    }

    set code(code) {
        this._code = code;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(quantity) {
        this._quantity = quantity;
    }

    get total() {
        return this._total;
    }

    set total(total) {
        this._total = total;
    }
}