import  { MenuProduct, RestaurantMenu }  from '../models/MenuProduct';

const menuProducts = [
    new RestaurantMenu(
        1,
        'Timeout',
        [
            new MenuProduct(
                Math.random().toString(),
                "Pizza Timeout"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Soup Timeout"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Pasta Timeout"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Coffee Timeout"
            ),
        ]
    ),
    new RestaurantMenu(
        2,
        'Dopo Poco',
        [
            new MenuProduct(
                Math.random().toString(),
                "Pizza Dopo Poco"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Soup Dopo Poco"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Pasta Dopo Poco"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Coffee Dopo Poco"
            ),
        ]
    ),
    new RestaurantMenu(
        3,
        'Doppio Zero',
        [
            new MenuProduct(
                Math.random().toString(),
                "Pizza Doppio Zero"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Soup Doppio Zero"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Pasta Doppio Zero"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Coffee Doppio Zero"
            ),
        ]
    ),
    new RestaurantMenu(
        4,
        'Moara de Foc',
        [
            new MenuProduct(
                Math.random().toString(),
                "Pizza Moara de Foc"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Soup Moara de Foc"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Pasta Moara de Foc"
            ),
            new MenuProduct(
                Math.random().toString(),
                "Coffee Moara de Foc"
            ),
        ]
    ),
];

export default menuProducts;