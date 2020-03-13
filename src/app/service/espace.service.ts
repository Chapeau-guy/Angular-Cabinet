import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private baseURL = 'http://localhost:9090/Taches';
  constructor(private httpClient: HttpClient) { } // recuperer les donnée a partir du serveur web
  public getAllTache():Observable<any>{
      return this.httpClient.get(this.baseURL);
  }
  public deleteTache(id:number):Observable<any>{
      return this.httpClient.delete(this.baseURL+"/"+id)
  }
  public saveTache(user:any):Observable<any>{
    return this.httpClient.post(this.baseURL, user)
  }
  public getTache(id:number):Observable<any>{
    return this.httpClient.get(this.baseURL+"/"+id);
  }
  public updateTache(id:number,user:any){
    return this.httpClient.put(this.baseURL+"/"+id,user);
  }
  public validateTache(id:number,user:any){
    // la validation
  }
}

