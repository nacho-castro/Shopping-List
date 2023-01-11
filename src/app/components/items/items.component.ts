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
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      this.getTotal(); 
    });

    
  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.completed)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item)
      .subscribe(() => {
        this.items = this.items.filter(i => i.id !== item.id)
        this.getTotal();
      })

    
  }

  toggleItem(item: Item) {
    item.completed = !item.completed;
    this.itemService.updateToggleItem(item).subscribe();
    this.getTotal();
  }

  addItem(item: Item) {
    this.itemService.addItem(item).subscribe(item => {
      this.items.push(item)
      this.getTotal();
    });

    
  }


}
