import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:3000/items'

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl)
  }

  addItem(item:Item): Observable<Item>{
    return this.http.post<Item>(this.apiUrl, item, httpOptions)
  }

  deleteItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`
    return this.http.delete<Item>(url)
  }

  updateToggleItem(item: Item): Observable<Item>{
    const url = `${this.apiUrl}/${item.id}`
    return this.http.put<Item>(url, item, httpOptions)
  }
}




