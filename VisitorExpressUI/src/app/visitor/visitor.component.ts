import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Visitor } from './visitor.model';
import { VisitorService } from '../services/visitorService';

@Component({
    moduleId: module.id,
    selector: 'as-visitor',
    templateUrl: 'visitor.html',
    providers: [VisitorService]
})
export class VisitorComponent {
    visitors: Visitor[] = [];
    public visitor: Visitor;

    constructor(private _visitorService: VisitorService, private router: Router) {
        this.visitor = new Visitor(-1, '', '', '');
    }

    addVisitor() {
        this._visitorService
            .addNew(this.visitor)
            .subscribe(
            d => {
                this.getAllVisitors();
                this.router.navigate(['/']);
                return true;
            },
            e => {
                console.error('Error saving the visitor: ' + e);
            });
        console.log('name: ' + this.visitor.fullName);
    }

    getAllVisitors() {
        this._visitorService
            .getAll()
            .subscribe(p => this.visitors = p);
    }
}
