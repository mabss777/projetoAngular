import { Routes } from '@angular/router';
import { UsersList } from './pages/users-list/users-list';
import { UserDetails } from './pages/user-details/user-details';

export const routes: Routes = [

  {
    path: "listas",
    component: UsersList
  },
  
  {
    path: "detalhes/:id",
    component: UserDetails
  },

  {
    path: "",
    component: UsersList
  }
];
