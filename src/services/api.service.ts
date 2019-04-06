import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CandidateDTO } from '../models/candidate.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://delineaapi.herokuapp.com/';


  public createCandidate(candidate: CandidateDTO){
    return this.httpClient.post(`${this.apiURL}/candidate/`,candidate);
  }
  
  public updateCandidate(candidate: CandidateDTO){
    return this.httpClient.put(`${this.apiURL}/candidate/${candidate.id}`,candidate);
  }

  public deleteCandidate(id: number){
    return this.httpClient.delete(`${this.apiURL}/candidate/${id}`);
  }

  public getCandidateById(id: number){
    return this.httpClient.get(`${this.apiURL}/candidate/${id}`);
  }

  public getCandidates(url?: string){
    return this.httpClient.get<CandidateDTO[]>(`${this.apiURL}/candidate`);
  }

  constructor(private httpClient: HttpClient) {}
}