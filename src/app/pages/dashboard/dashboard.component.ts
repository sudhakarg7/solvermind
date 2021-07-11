import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileArray = [];
  constructor(public api: ApiService) { }
  pageCount = 1;
  searchText
  ngOnInit(): void {
    this.getProfiles(1)
  }

  getProfiles(page: number) {
    this.api.getProfileList(page).subscribe((data: any) => {
      if (data && data.data) this.profileArray = data.data;
    });
  }

  action(data) {
    const index = this.profileArray.findIndex(item => item.id === data.index );
    if (index > -1) {
      this.profileArray.splice(index, 1);
    }

  }

}
