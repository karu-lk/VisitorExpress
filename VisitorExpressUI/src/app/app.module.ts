import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { VisitorModule } from './visitor/visitor.module';
import { VisitorListModule } from './visitorList/visitorList.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NavbarModule,
        HomeModule,
        VisitorModule,
        routing,
        HttpModule,
        VisitorListModule
    ],
    providers: [APP_PROVIDERS, appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
