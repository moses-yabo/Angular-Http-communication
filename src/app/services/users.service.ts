import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) {

   }

   getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
   }

   getUser():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/8`);
   }
   createUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}`,user);
   }
}
