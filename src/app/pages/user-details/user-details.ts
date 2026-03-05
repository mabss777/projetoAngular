import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { User as UserModel } from '../../models/user';
import { User as UserService } from '../../services/user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-user-details',
  templateUrl: './user-details.html',
})
export class UserDetails implements OnInit {

  usuarios!: UserModel;
  console: any;
  error: string | undefined;
  loading: boolean | undefined;
  usuario: UserModel | undefined;

  constructor(private usuarioService: UserService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.buscarPorId(parseInt(id)).subscribe((usuarios) => {
        this.usuarios = usuarios;
        console.log(this.usuarios);
        this.cdr.detectChanges();
      });
    }

    if (!id) {
    this.error = 'ID do usuário não informado.';
    this.loading = false;
    return;
  }

  this.usuarioService.buscarPorId(parseInt(id)).subscribe({
    next: (usuarioEncontrado) => {
      if (usuarioEncontrado) {
        this.usuario = usuarioEncontrado;
      } else {
        this.error = 'Usuário não encontrado.';
      }
      this.loading = false;
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error(err);
      this.error = 'Ocorreu um erro ao buscar o usuário.';
      this.loading = false;
      this.cdr.detectChanges();
    }
  });
  }

    voltar() {
      this.router.navigate(['/listas']);
    }
  }
