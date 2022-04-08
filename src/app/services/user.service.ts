import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users()
  {
    return [
      {
        name:'std1',
        age:22,
        email:'std1@gmail.com'
      },
      {
        name:'std2',
        age:25,
        email:'std2@gmail.com'
      },
      {
        name:'std3',
        age:20,
        email:'std3@gmail.com'
      }
    ]
  }
  
}
