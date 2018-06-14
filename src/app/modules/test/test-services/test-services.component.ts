import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DatabaseService } from '../services/database.service';
=======
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7

@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss']
})
export class TestServicesComponent implements OnInit {
<<<<<<< HEAD
  //public database: any = this.datab.items;
  constructor(private datab: DatabaseService) { }
=======

  constructor() { }
>>>>>>> ff8d6c68e069ee9a7731481c227ac415cc0819f7

  ngOnInit() {
  }

}
