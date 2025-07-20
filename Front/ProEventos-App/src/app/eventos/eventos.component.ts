import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  imports: [CommonModule, HttpClientModule]
})
export class EventosComponent implements OnInit {

  public eventos: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.http.get("https://localhost:5001/eventos").subscribe({
      next: response => this.eventos = response,
      error: error => console.error(error)
    });
  }

}
