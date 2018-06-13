import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {
  //public database: any = this.datab.items;
  constructor(private datab: DatabaseService) { }

  ngOnInit() {
  }

}
