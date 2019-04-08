import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {CandidateDTO} from '../../../models/candidate.dto'
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CandidateService } from '../../../services/candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-model',
  templateUrl: './register-model.component.html',
  styleUrls: ['./register-model.component.css']
})
export class RegisterModelComponent implements OnInit {
  
  @Input() title;
  @Input() candidate: CandidateDTO;

  registerForm: FormGroup;
  submitted = false;
  isShowMessage : boolean;
  message: string;
  messageType: string;
  
  private formSubmitAttempt: boolean;
  
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public http: HttpClient,
    private candidateService : CandidateService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.formSubmitAttempt = false;
    this.startForm();
    this.selectCandidate();
  }

  startForm() {
    this.registerForm = this.formBuilder.group({
    id: [null],
    full_name: ['', Validators.required],
    cpf: [''],
    rg:  [''], 
    birth_date: [''],
    phone: [''],
    username: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]],
    password: ['',  Validators.required],
   })
  }

  selectCandidate() {
    if (this.candidate == undefined) {
      return;
    }

    this.registerForm.controls.id.setValue(this.candidate.id);
    this.registerForm.controls.full_name.setValue(this.candidate.full_name);
    this.registerForm.controls.cpf.setValue(this.candidate.cpf);
    this.registerForm.controls.rg.setValue(this.candidate.rg);
    this.registerForm.controls.birth_date.setValue(this.candidate.birth_date);
    this.registerForm.controls.phone.setValue(this.candidate.phone);
    this.registerForm.controls.username.setValue(this.candidate.username);
    this.registerForm.controls.password.setValue(this.candidate.password);
    this.registerForm.controls.email.setValue(this.candidate.email);
  }

  showMessage(mensagem, messageType) {
    this.isShowMessage = true;
    this.message = mensagem;
    this.messageType = messageType;
    setTimeout(() => {this.hideMessage();}, 4000);
  }

  hideMessage() {
    this.isShowMessage = false;
    this.message = '';
    this.messageType = '';
  }

  reset() {
    this.registerForm.reset();
    this.formSubmitAttempt = false;
  }

  cancel() {
    this.reset();
    this.router.navigate(['login']);
  }


  isFieldInvalid(field: string) {
    return (
      (!this.registerForm.get(field).valid && this.registerForm.get(field).touched) ||
      (this.registerForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

  saveCandidate() {
    this.formSubmitAttempt = true;
    if (!this.registerForm.valid) {
      this.toastrService.warning("Houve algum problema na gravação do registro.");
      console.log("Formulário inválido");
      return;
    }

    if (this.registerForm.controls.id.value == null) {
      this.candidateService.createCandidate(this.registerForm.value)
      .subscribe(response => {
        this.toastrService.success("Salvo com sucesso!")
       console.log('Salvo com sucesso!');
      }, error => {
        console.log(error.error);
      });
      return;
    } else {
      this.candidateService.updateCandidate(this.registerForm.value)
      .subscribe(response => {
      this.toastrService.success("Atualizado com sucesso!")
       console.log('Atualizado com sucesso!');
      }, error => {
        console.log(error.error);
      });
    }
  }
}
