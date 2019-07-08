import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
// import { QuoteFormComponent } from '../quote-form/quote-form.component';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes : Quotes [] = [
    new Quotes(1,  'Wambui Collymore', 'A person is a person no matter how small they are.', 'Laura Macharia', new Date(2019,4,3), 0, 0),
    new Quotes(2, 'Dolly Parton', 'Dont get so busy making a living that you forget to make a life.', 'Laura Macharia', new Date(2019,5,9), 0, 0)
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuotes(quotes) {
    quotes.completeDate = new Date(quotes.completeDate);
    this.quotes.push(quotes);
  }
  upVoter(index) {
    let i: number;
    i = this.quotes[index].upVote;
    i++;
    this.quotes[index].upVote = i;
  }

  dnVoter(index) {
    let j: number;
    j = this.quotes[index].dnVote;
    j++;
    this.quotes[index].dnVote = j;
  }

  highest(arr) {
    arr = [];
    this.quotes.forEach(quote => {
      arr.push(quote.upVote);
    });
    const high = Math.max.apply(Math, arr);
    return high;
  }

  addQuote(quote) {
    this.quotes.unshift(quote);
    console.log(this.quotes);
  }

  constructor() { }

  ngOnInit() {
    const arr = []
    this.quotes.forEach(quote=> {
      arr.push(quote.upVote - quote.dnVote);
    });
    const high = Math.max.apply(Math, arr);
  }

}
