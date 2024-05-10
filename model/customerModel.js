export default class customerModel{

    constructor(id,name,salary,address){
        this._id=id;
        this._name=name;
        this._salary=salary;
        this._address = address;
     }


    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary;
    }

    get address() {
        return this._address;
    }

    set address(address) {
        this._address = address;
    }
}