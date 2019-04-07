import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  @Input() footerStyleForm = "footer-form";
  @Input() title = "Cadastro de Candidatos";

  ngOnInit() {
    this.alterText();  
  }

  alterText() {
    document.getElementById('title').innerHTML = 'Cadastro de Candidatos';
  }

}
