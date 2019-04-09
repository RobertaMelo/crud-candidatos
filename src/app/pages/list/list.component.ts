import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { CandidateService } from '../../../services/candidate.service';
import { CandidateDTO } from '../../../models/candidate.dto';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() footerStyleForm = "footer-form";
  candidates: CandidateDTO[];

  constructor(
    private router: Router,
    private candidateService: CandidateService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.chargeCandidates();
  }

  chargeCandidates() {
    this.candidateService.getCandidates()
    .subscribe(response => {
      this.candidates = response;
    }, error => {
      console.log(error);
    });
  }

  alter(candidate: CandidateDTO) {
    this.router.navigate(['edit', candidate]);
  }

  delete(candidate: CandidateDTO) {
    this.candidateService.deleteCandidate(candidate).pipe(first()).subscribe(() => {
      this.toastrService.success("Excluído com sucesso!")
      this.chargeCandidates()
    });
  }
}


