import menuProducts from '../data/menus-dummy-data';

export const getMenus = (selectedRestaurantName) => {
    return menuProducts.find(menu => menu.restaurantName === selectedRestaurantName);
}