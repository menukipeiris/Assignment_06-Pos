export default class orderDetailModel{
    constructor(order_id, item_id, qty, unit_price) {
        this._order_id = order_id;
        this._item_id = item_id;
        this._qty = qty;
        this._unit_price = unit_price;
    }


    get order_id() {
        return this._order_id;
    }

    set order_id(order_id) {
        this._order_id = order_id;
    }

    get item_id() {
        return this._item_id;
    }

    set item_id(item_id) {
        this._item_id = item_id;
    }

    get qty() {
        return this._qty;
    }

    set qty(qty) {
        this._qty = qty;
    }

    get unit_price() {
        return this._unit_price;
    }

    set unit_price(unit_price) {
        this._unit_price = unit_price;
    }
}