import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/service/item.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  
  title: string = '';
  price: number = 0;
  quantity: number = 0;
  completed: boolean = false;

  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(login: NgForm){
    if (this.title.length === 0) {
      alert("Please add an Item!");
      return
    }

    const { title, price, quantity, completed} = this
    const item = { title, price, quantity, completed}
    
    this.itemService.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });
    
  }

}
