import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User as UserModel } from '../../models/user';
import { User as UserService } from '../../services/user'
import { Contato } from '../../componentes/contato/contato';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-users-list',
  imports: [
    RouterModule,
    CommonModule,
    Contato
  ],
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.css'],
})
export class UsersList implements OnInit{

  usuarios: UserModel[] = [];

  constructor(private usuarioService: UserService, private cdr: ChangeDetectorRef){}

  ngOnInit(){
      this.usuarioService.getUsers().subscribe(listaUsuario => {
        this.usuarios = listaUsuario;
        console.log(this.usuarios);
        this.cdr.detectChanges();
      })
  }
}
