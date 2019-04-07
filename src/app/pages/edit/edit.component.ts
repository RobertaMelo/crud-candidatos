import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @Input() footerStyleForm = "footer-form";
  @Input() title = "Edição de Candidatos";

  constructor() {}

  ngOnInit() {
    this.alterText();  
  }
  
  alterText() {
    document.getElementById('title').innerHTML = 'Edição de Candidatos';
  }
}
