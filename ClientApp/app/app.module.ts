import { AdminComponent } from './components/admin/admin.component';
import { AuthService } from './services/auth.service';
import { PhotoService } from './services/photo.service';
import { PaginationComponent } from './components/shared/pagination.component';
import { ErrorHandler } from '@angular/core';
import { ToastyModule } from 'ng2-toasty';
import { VehicleService } from './services/vehicle.service';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { AppErrorHandler } from "./app.error-handler";
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { BrowserXhr } from "@angular/http";
import { BrowserXhrWithProgress, ProgressService } from "./services/progress.service";
import { AuthGuard } from "./services/auth-gaurd.service";
import { AdminAuthGuard } from "./services/admin-auth-guard";
import { AUTH_PROVIDERS } from "angular2-jwt";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        VehicleFormComponent,
        VehicleListComponent,
        PaginationComponent,
        ViewVehicleComponent,
        AdminComponent
    ],
    imports: [
        ToastyModule.forRoot(),
        FormsModule,
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'vehicles', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'vehicles/new', component: VehicleFormComponent, canActivate: [AuthGuard] },
            { path: 'vehicles/edit/:id', component: VehicleFormComponent, canActivate: [AuthGuard] },
            { path: 'vehicles/:id', component: ViewVehicleComponent },
            { path: 'vehicles', component: VehicleListComponent },
            { path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard] },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        { provide: ErrorHandler, useClass: AppErrorHandler },
        AuthService,
        AUTH_PROVIDERS,
        AdminAuthGuard,
        AuthGuard,
        VehicleService,
        PhotoService
    ]
})
export class AppModule {
}
