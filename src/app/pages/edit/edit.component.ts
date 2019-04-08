import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateDTO } from '../../../models/candidate.dto';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @Input() footerStyleForm = "footer-form";
  @Input() title = "Edição de Candidatos";
  @Input() candidate: CandidateDTO;

  sub: any;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe((candidate: CandidateDTO) => {
      this.candidate = candidate;
    }); 
  }

}
