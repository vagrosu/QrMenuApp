// import Restaurants from '../data/restaurants-dummy-data';
import menuProducts from '../data/menus-dummy-data';

export const getRestaurants = () => {
    return menuProducts.map(({id, restaurantName}) => {
            return {id, restaurantName};
        }
    )

}