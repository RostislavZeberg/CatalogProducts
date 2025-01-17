import { CardsList } from '../utils/Interface';
import ProductsDataJson from '../../products.json'

const PRODUCTS_KEY = 'products';

export const getInitialCards = (): CardsList | undefined => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
        try {
            const products = JSON.parse(storedProducts);
            if (Array.isArray(products)) {
                return products as CardsList;
            }
        } catch (e) {
            console.error("Failed to parse products from localStorage", e);
        }
    } else {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(ProductsDataJson));
        return ProductsDataJson;
    }
};
