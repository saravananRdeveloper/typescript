import { Product } from './product';
import { Cart } from './Cart';
 
const cart = new Cart();
 
const product1 = new Product(1, 'Laptop', 1000);
const product2 = new Product(2, 'Headphones', 200);
const product3 = new Product(3, 'Mouse', 50);
 
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);
 
cart.showCart();