import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  moduleId : module.id,
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})


export class StarComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {

    console.log('In On Changes')

    this.starWidth = this.rating * 86 / 5;

  }

  onClick(): void {
    this.ratingClicked.emit(`This rating ${this.rating} was clicked`);
    console.log(`This rating ${this.rating} was clicked in the child component`);
  }


}
