import { Employee } from './../model/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  rootPath: string = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) {}

  getAllEmployees() {
    return this.httpClient.get(`${this.rootPath}/api/employees`);
  }

  addEmployees(employee: Employee) {
    return this.httpClient.post(`${this.rootPath}/api/employees`, employee);
  }

  deleteEmployee(id: Number) {
    return this.httpClient.delete(`${this.rootPath}/api/employees/${id}`);
  }
}
