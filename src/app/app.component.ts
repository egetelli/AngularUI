import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardsService } from './service/cards.service';
import { response } from 'express';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cards';

  constructor(private cardsService: CardsService){



  }
  ngOnInit(): void {
    this.getAllCards();
  }

  getAllCards(){
    this.cardsService.getAllCards()
    .subscribe(
      response => {
        console.log(response);
      }
    );
  }
}
