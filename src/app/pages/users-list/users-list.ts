import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User as UserModel } from '../../models/user';
import { User as UserService } from '../../services/user'
import { Contato } from '../../componentes/contato/contato';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-users-list',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css'],
})
export class UsersList implements OnInit {

  usuarios: UserModel[] = [];
  loading = true;
  error = '';

  constructor(
    private usuarioService: UserService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.usuarioService.getUsers().subscribe({
      next: (lista) => {
        this.usuarios = lista;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Erro ao carregar usuários';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });

  }
}
