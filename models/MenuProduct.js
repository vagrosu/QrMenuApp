export class MenuProduct {
    constructor(id, name) {
        this.id = id, 
        this.name = name;
    }
}

export class RestaurantMenu {
    constructor(id, restaurantName, products) {
        this.id = id.toString,
        this.restaurantName = restaurantName,
        this.products = products;
    }
}