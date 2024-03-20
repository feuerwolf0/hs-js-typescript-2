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
        const index = this._items.findIndex(item => item.id === id);
        if (index != -1) {
            this._items.splice(index, 1);
        }
    }
}