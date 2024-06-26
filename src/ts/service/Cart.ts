import Buyable from "../domain/Buyable";

export default class Cart {
    private _items: Buyable[] = [];
    addItem(item: Buyable) {
        this._items.push(item);
    }
    get items() {
        return this._items;
    }
    totalPrice(): number {
        return this._items.reduce((acc, item) => acc + item.price, 0);
    }
    totalPriceWithDiscount(discount: number): number {
        return this.totalPrice() * (1 - discount / 100)
    }
    removeItem(id: number) {
        this._items = this._items.filter(item => item.id != id);
    }
}