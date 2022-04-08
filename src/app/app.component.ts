import { Component } from '@angular/core';
import{UserService} from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  username="user1";
  show=false;
  log=[1];
  onClick(){
    this.show=!this.show;
    this.log.push(this.log.length + 1);
  }
  // constructor(){
  //   //  setTimeout(() => {
  //   //    this.title = "change title";
  //   //  },2000);

  // }
  
  disableBox=true;
  enableBox(){
    this.disableBox=false;
  }
  getValue()
  {
    return "hello";
  }
  server="server is off";
  onServer(){
    this.server="server is on";
  }
  users:any;
  constructor(private user:UserService)
  {
    console.warn("user",user.users())
    this.users=user.users();
  }

  list:any[]=[];
  userLogin(item:any)
  {
    console.log(item);
    this.list.push({id:this.list});
    //console.log(this.list)
    
  }
}
 