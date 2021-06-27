import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { TasksComponent } from './components/tasks/tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TasksService } from './services/tasks.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TasksComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [TasksService],
  exports : [TasksComponent, CreateTaskComponent]
})
export class TaskModule { }
