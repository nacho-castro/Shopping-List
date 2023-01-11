import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/service/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService) {

  }
  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items
    });
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item)
      .subscribe(() => {
        this.items = this.items.filter(t => t.id !== t.id)
      })
  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }
}
