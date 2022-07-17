import { Order } from './../model/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  rootPath: string = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) {}

  getAllOrders() {
    return this.httpClient.get(`${this.rootPath}/api/orders`);
  }

  addOrder(order: Order) {
    return this.httpClient.post(`${this.rootPath}/api/orders`, order);
  }

  deleteOrder(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/orders/${id}`);
  }
}
