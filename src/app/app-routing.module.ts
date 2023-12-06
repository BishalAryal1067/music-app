import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search', component:SearchComponent},
  {path:'playlist', component:PlaylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
