import { Address } from './../model/address';
import { HttpClient } from '@angular/common/http';


export class AddressService {
  rootPath: string = 'http://localhost:8081';

  constructor(private httpClient : HttpClient) { }

  getAllAddress() {
    return this.httpClient.get(`${this.rootPath}/api/address`);
  }

  addAddress(address: Address) {
    return this.httpClient.post(`${this.rootPath}/api/address`, address);
  }

  deleteAddress(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/address/${id}`);
  }
}
