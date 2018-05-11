import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
