import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../models/task/task';
import { TasksService } from '../../services/tasks.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  trashIcon = faTrash;
  tasks : Task[] = [];
  constructor(private taskData: TasksService) { 
    
  }

  

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.taskData.getTasks().subscribe(tasks =>{
      this.tasks = tasks;
    })
  }
  deleteTask(task: Task){
      this.taskData.deleteTask(task.id).subscribe(data => {
          this.getTasks();
      })
  }
}
