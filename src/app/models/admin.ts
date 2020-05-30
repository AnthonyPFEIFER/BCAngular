export class Admin {
    id: number;
    username: string;
    password: string;
    apiKey: string;


    // tslint:disable-next-line: max-line-length
    constructor(username: string = null, password: string = null) {
        this.username = username;
        this.password = password;
    }

}
