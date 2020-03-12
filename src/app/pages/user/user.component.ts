import { Component, OnInit } from "@angular/core";
import { Utilisateur } from 'src/app/model/utilisateur';
import { UserService } from 'src/app/service/user.service';
import { AppService } from 'src/app/app.service';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})
export class UserComponent implements OnInit {
  users: any[];
  user: Utilisateur = new Utilisateur();
  constructor(private appService:AppService,private userService: UserService) {}
  ngOnInit() {
    this.loadUser();

  }
  authenticated(){
    return this.appService.authenticated;
  }
  loadUser() {
    this.userService.getAllUtilisateur().subscribe(data => { this.users = data; console.log(this.users) })
  }
  deleteUser(user) {
    this.userService.deleteUtilisateur(user.idUtilisateur).subscribe(() => { this.loadUser() })
  }
  createUser() {
    this.userService.saveUtilisateur(this.user).subscribe(
      () => {
        this.loadUser();
        this.user = new Utilisateur();

      }
    )
  }
}
