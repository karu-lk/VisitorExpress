export class Visitor {
    public visitorId: number;
    public fullName: string;
    public company: string;
    public host: string;

    static clone(visitor: Visitor): Visitor {
        return new Visitor(visitor.visitorId, visitor.fullName, visitor.company, visitor.host);
    }

    constructor(_visitorId: number, _fullName: string, _company: string, _host: string) {
        this.fullName = _fullName;
        this.company = _company;
        this.host = _host;
    }

    clear() {
        this.visitorId = -1;
        this.fullName = '';
        this.company = '';
        this.host = '';
    }
}
