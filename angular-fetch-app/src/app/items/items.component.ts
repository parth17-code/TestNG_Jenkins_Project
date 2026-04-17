import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsService, Item } from '../items.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent implements OnInit {
  items = signal<Item[]>([]);
  loading = signal(true);
  error = signal<string | null>(null);

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  async loadItems(): Promise<void> {
    try {
      this.loading.set(true);
      this.error.set(null);
      const data = await this.itemsService.fetchItems();
      this.items.set(data);
    } catch (err) {
      this.error.set('Failed to load items');
      console.error(err);
    } finally {
      this.loading.set(false);
    }
  }
}
