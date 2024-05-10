export default class itemModel{
    constructor(itemCode,itemName,itemQuantity,itemPrice) {
        this._itemCode = itemCode;
        this._itemName = itemName;
        this._itemQuantity = itemQuantity;
        this._itemPrice = itemPrice;
    }

    get itemCode() {
        return this._itemCode;
    }

    set itemCode(itemCode) {
        this._itemCode = itemCode;
    }

    get itemName() {
        return this._itemName;
    }

    set itemName(itemName) {
        this._itemName = itemName;
    }

    get itemQuantity() {
        return this._itemQuantity;
    }

    set itemQuantity(itemQuantity) {
        this._itemQuantity =itemQuantity;
    }

    get itemPrice() {
        return this._itemPrice;
    }

    set itemPrice(itemPrice) {
        this._itemPrice = itemPrice;
    }
}