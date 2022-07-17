import { Role } from './../model/role';
import { HttpClient } from '@angular/common/http';


export class RoleService {
  rootPath: string = 'http://localhost:8081';

  constructor(private httpClient:HttpClient) { }

  getAllRoles() {
    return this.httpClient.get(`${this.rootPath}/api/role`);
  }

  addRole(role: Role) {
    return this.httpClient.post(`${this.rootPath}/api/role`, role);
  }

  deleteRole(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/role/${id}`);
  }
}
