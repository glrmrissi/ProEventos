import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  imports: [CommonModule, HttpClientModule, FormsModule]
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public eventosFiltrados: any = [];
  mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }
  public set filtroLista(v: string) {
    this._filtroLista = v;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }
  
  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (e: any) => e.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        e.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        e.dataEvento.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
  
  alterarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
  }

  constructor(private http: HttpClient) { }
  
  public getEventos(): void {
    this.http.get("http://localhost:5000/eventos").subscribe({
      next: response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error: error => console.error(error)
    });
  }

  ngOnInit(): void {
    this.getEventos();
  }


}
