import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatCardModule } from '@angular/material'
import { MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SidebarModule } from 'ng-sidebar';

import { AppComponent } from '../app/app.component';
import { ExpansionPanelComponent } from '../app/expansion-panel/expansion-panel.component';
import { LerJsonComponent } from '../app/lerJson/lerJson.component';
import { ApiRestComponent } from '../app/ApiRest/ApiRest.component';
import { PaginationComponent } from '../app/pagination/pagination.component';
import { SidenavListComponent } from '../app/sidenav-list/sidenav-list.component';


@NgModule({
   declarations: [
      AppComponent,
      ExpansionPanelComponent,
      LerJsonComponent,
      ApiRestComponent,
      PaginationComponent,
      SidenavListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      MatMenuModule,
      MatExpansionModule,
      MatRadioModule,
      HttpClientModule,
      NgxPaginationModule,
      SidebarModule.forRoot()
   ],
   providers: [],
      bootstrap: [
      AppComponent,
      ExpansionPanelComponent,
      LerJsonComponent,
      ApiRestComponent,
      PaginationComponent,
      SidenavListComponent
   ]
})
export class AppModule { }

// platformBrowserDynamic().bootstrapModule(SidenavListComponent);



