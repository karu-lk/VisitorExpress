import { Component } from '@angular/core';

import { Visitor } from '../visitor/visitor.model';
import { VisitorService } from '../services/visitorService';

@Component({
    moduleId: module.id,
    selector: 'as-visitor-list',
    templateUrl: 'visitorList.html',
    providers: [VisitorService]
})
export class VisitorListComponent {
    visitors: Visitor[] = [];
    public visitor: Visitor;
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(private _visitorService: VisitorService) {
        this.visitor = new Visitor(-1, '', '', '');
        this.getAllVisitors();
    }

    getAllVisitors() {
        this._visitorService
            .getAll()
            .subscribe(
            p => this.visitors = p,
            e => this.errorMessage = e,
            () => this.isLoading = false);
    }
}
