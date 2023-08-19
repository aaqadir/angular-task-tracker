import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // private apiUrl = 'http://localhost:5000/tasks';
  private apiUrl =
    'https://my-json-server.typicode.com/aaqadir/json-server/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const task_id = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(task_id);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const task_id = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(task_id, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
