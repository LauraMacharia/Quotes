import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuotes = new Quotes(0,"","", '',new Date(), 0, 0);
  @Output() addQuotes = new EventEmitter<Quotes>();

  submitQuotes() {
    this.addQuotes.emit(this.newQuotes);
  }
  constructor() { }

  ngOnInit() {
  }

}