export class Task {
    id: number;
    title : string;
    message: string;

    constructor(id: number, title : string, message : string){
        this.title = title;
        this.id = id;
        this.message = message;
    }
    resetId(id : number){
        this.id = id;
    }
}
