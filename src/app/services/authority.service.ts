import { Authority } from './../model/authority';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  rootPath: String ='http://localhost:8081'
  constructor(private HttpClient: HttpClient) { }

  getAllAuthoritys(){
    return this.HttpClient.get(`${this.rootPath}/api/authority`)
  }
  addAuthority(authority: Authority){
    return this.HttpClient.post(`${this.rootPath}/api/authority`,authority)
  }
  deleteAuthority(id: Number){
    return this.HttpClient.delete(`${this.rootPath}/api/authority${id}`)
  }

}
