import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pipelines$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPipelines().subscribe(
      data => this.pipelines$ = data
    );
  }

}
