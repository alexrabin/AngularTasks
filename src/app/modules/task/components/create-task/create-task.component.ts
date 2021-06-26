import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../models/task/task';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  model : Task = new Task(this.getRandomInt(1000000), "", "");
  arrow = faChevronLeft;

  constructor(private taskData: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
        this.taskData.createNewTask(this.model).subscribe(data => {
          this.router.navigate(['../tasks']);

        })
  }
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
