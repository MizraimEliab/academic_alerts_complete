export class Alert {
    constructor(_id = '', matricula = '', student_name ='', educational_program='',incidence='',tracing='', comment = '', id_user = ''){
        this._id = _id;
        this.matricula = matricula;
        this.student_name = student_name;
        this.educational_program = educational_program;
        this.incidence = incidence;
        this.tracing = tracing;
        this.id_user = id_user;
        this.comment = comment;

    }
    _id:string;
    matricula:string;
    student_name:string;
    educational_program:string;
    incidence:string;
    tracing:string;
    id_user:string;
    comment: string;
}
