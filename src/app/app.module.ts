import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from "@angular/fire";
import { StoreModule } from "@ngrx/store";
import { HeaderComponent } from './shared/components/navigation/header/header.component';
import { SidenavListComponent } from './shared/components/navigation/sidenav-list/sidenav-list.component';

import { environment } from 'src/environments/environment';
import { reducers } from "./app.reducer";

// Modules
import { MaterialModule } from "./material.module";
import { AuthModule } from "./auth/auth.module";

// Services
import { AuthService } from './auth/auth.service';
import { UiService } from './shared/ui.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    StoreModule.forRoot(reducers),
    AuthModule,
  ],
  providers: [
    AuthService,
    UiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
