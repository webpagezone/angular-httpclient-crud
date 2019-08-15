import { Component, OnInit } from "@angular/core";
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: "app-employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.css"]
})
export class EmployeesListComponent implements OnInit {
  Employee: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadEmployees();
  }
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }

  deleteEmployee(id) {
    if (confirm("Are you shure, you want to delete employee?")) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees();
      });
    }
  }
}
