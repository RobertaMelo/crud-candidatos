import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {
  
  @Input() title;
  
  constructor() { }

  ngOnInit() {

  }

}
