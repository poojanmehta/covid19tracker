import { Routes, RouterModule } from '@angular/router';
import { DisplayAllDataComponent } from './app/display-all-data/display-all-data.component';
import { DisplayStateDataComponent } from './app/display-all-data/display-state-data/display-state-data.component';

const routes: Routes = [
  { path: '', component: DisplayAllDataComponent },
  { path: 'coviddata', component: DisplayAllDataComponent },
  { path: 'statedata/:state', component: DisplayStateDataComponent }
];

export const routingArr = RouterModule.forRoot(routes);
