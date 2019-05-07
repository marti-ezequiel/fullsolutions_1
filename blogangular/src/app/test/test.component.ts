import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public hoy: Date = new Date();

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
