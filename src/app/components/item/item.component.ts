import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  
  @Input() item: any;
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() onToggleItem: EventEmitter<Item> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(item: Item){
    this.onDeleteItem.emit(item);
  }

  onToggle(item: Item){
    this.onToggleItem.emit(item);
  }

}
