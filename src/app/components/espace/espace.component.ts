import { Component, OnInit } from '@angular/core';
import { TacheService } from './espace.service';
import { Tache } from '../../model/tache';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taches',
  templateUrl: './espace.component.html',
  styleUrls: ['./espace.component.css']
})
export class TacheComponent implements OnInit {
  tachess : any[];
  taches: Tache = new Tache();
  myForm: FormGroup;


  constructor(private tachesService : TacheService, private formBuilder:FormBuilder, private router: Router) { } // le form Builder  ,permet de faire la saisie.

  ngOnInit(): void {
    this.loadTache();
    this.myForm=this.formBuilder.group({
      titre: ['',Validators.required],
      description: ['',Validators.required],
      dateCreation : ['',Validators.required],
      statutAudience: ['',Validators.required]
    });
  }
  loadTache(){
    this.tachesService.getAllTache().subscribe(data=>{this.tachess =data;console.log(this.tachess)})
  }
  deleteTache(taches){
    this.tachesService.deleteTache(taches.idTache).subscribe(()=>{this.loadTache()})
  }
  createTache(myForm){
    this.tachesService.saveTache(this.taches).subscribe(
      () =>{this.loadTache();
      this.taches =new Tache();}
    )
  }
  editTache(id:number){
    this.router.navigate(['editTache',id]); // router est une interface qui permet de faire

  }
}

