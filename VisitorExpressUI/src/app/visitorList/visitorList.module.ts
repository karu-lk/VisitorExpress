import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VisitorListComponent } from './index';

@NgModule({
    declarations: [
        VisitorListComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        VisitorListComponent
    ]
})
export class VisitorListModule {
}
