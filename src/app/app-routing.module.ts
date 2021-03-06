import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component'
import { ArtistComponent} from './components/artist/artist.component'

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
    {path: "home", component: MainComponent},
    {path: "artist", component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
export class AppRoutingModule { }
