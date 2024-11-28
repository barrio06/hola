import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-user-cards',
    templateUrl: './user-cards.component.html',
    styleUrls: ['./user-cards.component.css'],
    standalone: false
})
export class UserCardsComponent implements OnInit {
  @Input() type: 'musicos' | 'grupos' = 'musicos'; // Default to 'musicos'
  items: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.apiService.getData(this.type).subscribe((data) => {
      this.items = data;
    });
  }
}
