import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './modules/task/components/tasks/tasks.component';
import { CreateTaskComponent } from './modules/task/components/create-task/create-task.component';

const routes: Routes = [
  {
      path: 'tasks',
      component: TasksComponent,
  },
  {
    path: 'createTask',
    component: CreateTaskComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
