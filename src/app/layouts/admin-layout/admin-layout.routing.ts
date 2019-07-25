import { Routes } from "@angular/router";
import { TablesComponent } from 'src/app/pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
  { path: "", redirectTo:"room-booking" ,pathMatch:"full" },
  { path: "room-booking", component: TablesComponent }
];
