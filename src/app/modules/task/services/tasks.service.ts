import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../../../models/task/task';


@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksRoute = 'http://localhost:3000/tasks';

  constructor(private http : HttpClient) { }

  getTasks() :Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksRoute);
  }
  createNewTask(task : Task) : Observable<Object>{
      return this.http.post<Task>(this.tasksRoute, task);
  }
  deleteTask(id : number) : Observable<Object>{
     return this.http.delete(this.tasksRoute+`/${id}`);
  }
}
