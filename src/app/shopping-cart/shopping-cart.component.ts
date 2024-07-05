import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: Product[] = [];
  isCartOpen: boolean = false;
  totalAmount: number = 0;
  products: Product[] = [
      {
          id: 1,
          name: 'Laab kai chicken salad',
          image: './images/1.png',
          price: 10,
          quantity: 0
      },
      {
          id: 2,
          name: 'Som tam papaya salad',
          image: 'image/2.PNG',
          price: 9.5,
          quantity: 0
      },
      // Add more products as needed
  ];

  openShopping() {
      this.isCartOpen = true;
  }

  closeShopping() {
      this.isCartOpen = false;
  }

  addToCart(index: number) {
      const selectedItem = this.products[index];
      const existingItem = this.cartItems.find(item => item.id === selectedItem.id);
      if (existingItem) {
          existingItem.quantity++;
      } else {
          this.cartItems.push({ ...selectedItem, quantity: 1 });
      }
      this.calculateTotal();
  }

  calculateTotal() {
      this.totalAmount = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  changeQuantity(index: number, newQuantity: number) {
      if (newQuantity <= 0) {
          this.cartItems.splice(index, 1);
      } else {
          this.cartItems[index].quantity = newQuantity;
      }
      this.calculateTotal();
  }
} 

