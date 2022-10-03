import {OnInit} from'@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private users:User[]=[];
private user:User = {
  'id': 10,
    'name': 'ndiyinja',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }

};


constructor(private _userService:UsersService) {

}
//initializing the values
ngOnInit(): void {
    this.onGetUsers();
    this.onGetUser();
    console.log('wow',this.users.length);
    this.onUserCreate()
}

//creating the user from the service

onUserCreate():void{
  this._userService.createUser(this.user).subscribe({

    next:(val)=>{
console.table(val)
},

    error:(err)=>{
console.log(err , 'iyhuwiii');

    }
  })
}
//getting the users from the service

onGetUsers(): void{
this._userService.getUsers().subscribe({
  next:(value)=>{
    this.users = value;
    value.forEach((user:User,index:number,array:User[])=>{
      console.table(user);
      console.log('index',index);
      console.log('all of array',array);



    })
  },
  error:(error)=>{
    console.log(`an error has occured${error}`);

  },
  complete:()=>{}
})
}

//getting the user from the service

onGetUser():void{
  this._userService.getUser()
  .subscribe((val)=>{
    console.table(val);
setTimeout(() => {
  // console.log('wow2',this.users.length);
}, 3000);


  })

}

}
