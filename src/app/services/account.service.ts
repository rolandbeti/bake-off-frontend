import { Account } from './../model/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  rootPath: String ='http://localhost:8081'
  constructor(private HttpClient: HttpClient) { }

  getAllAccount(){
    return this.HttpClient.get(`${this.rootPath}/api/accounts`)
  }
  addAccount(account:Account){
    return this.HttpClient.post(`${this.rootPath}/api/account`,Account)
  }
  deleteAccount(id: Number){
    return this.HttpClient.delete(`${this.rootPath}/api/account/${id}`)
  }

}

