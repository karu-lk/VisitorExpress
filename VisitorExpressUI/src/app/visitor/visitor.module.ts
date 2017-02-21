import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisitorComponent } from './index';

@NgModule({
    declarations: [
        VisitorComponent
    ],
    imports: [
        FormsModule
    ],
    exports: [
        VisitorComponent
    ]
})
export class VisitorModule {
}
