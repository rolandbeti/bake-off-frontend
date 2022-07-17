import { OrderLine } from './../model/order-line';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {
 rootPath : String = 'http://localhost:8081'
  constructor(private HttpClient: HttpClient) { }

  getAllOrder(){
    return this.HttpClient.get(`${this.rootPath}/api/oreder-line`)
  }
  addOrderLine(orderLine: OrderLine){
    return this.HttpClient.post(`${this.rootPath}/api/order-line`,orderLine)
  }
  deleteOrderLine(id:Number){
    return this.HttpClient.delete(`${this.rootPath}/api/order-line${id}`)
  }
}
