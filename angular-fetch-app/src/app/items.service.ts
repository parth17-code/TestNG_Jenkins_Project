import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor() { }

  async fetchItems(): Promise<Item[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
      const data = await response.json();
      return data.map((post: any) => ({
        id: post.id,
        title: post.title,
        description: post.body
      }));
    } catch (error) {
      console.error('Error fetching items:', error);
      return [];
    }
  }
}
