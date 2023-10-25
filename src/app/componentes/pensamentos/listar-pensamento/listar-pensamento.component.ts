import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes!',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Imagine um texto muito impactante.',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: "Esse nisi amet voluptate cupidatat in ut. Veniam labore et enim ullamco officia non voluptate tempor pariatur nostrud anim. Ullamco deserunt laborum ea ex sint nulla est aliquip sunt est aute laborum esse et. Esse nisi amet voluptate cupidatat in ut. Veniam labore et enim ullamco officia non voluptate tempor pariatur nostrud anim. Ullamco deserunt laborum ea ex sint nulla est aliquip sunt est aute laborum esse et. Esse nisi amet voluptate cupidatat in ut. Veniam labore et enim ullamco officia non voluptate tempor pariatur nostrud anim. Ullamco deserunt laborum ea ex sint nulla est aliquip sunt est aute laborum esse et. Esse nisi amet voluptate cupidatat in ut. Veniam labore et enim ullamco officia non voluptate tempor pariatur nostrud anim. Ullamco deserunt laborum ea ex sint nulla est aliquip sunt est aute laborum esse et.",
      autoria: 'Angular',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
