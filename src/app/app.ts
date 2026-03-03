import { Component, signal } from '@angular/core';
import { Container } from './componentes/container/container';
import { UsersList } from './pages/users-list/users-list';
import { UserDetails } from './pages/user-details/user-details';

@Component({
  selector: 'app-root',
  imports: [
    Container,
    UsersList,
    UserDetails
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividadeRotas');
}
