import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.scss']
})
export class TestTwoComponent implements OnInit {

  constructor(
    public personService: PersonService
  ) { }

  ngOnInit() {
  }

  public saludar(s: string, e: MouseEvent) : void {
    alert(s);
    console.info(e);
  }
}
