import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectorado',
  templateUrl: './rectorado.component.html',
  styleUrls: ['./rectorado.component.scss']
})
export class RectoradoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Entro Rectorado");
  }

}
