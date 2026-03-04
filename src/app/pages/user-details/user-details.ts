import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User as UserModel } from '../../models/user';
import { User as UserService } from '../../services/user';

@Component({
  standalone: true,
  selector: 'app-user-details',
  templateUrl: './user-details.html',
})
export class UsersDetails implements OnInit{

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
