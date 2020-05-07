export class Admin {
    id: number;
    username: string;
    password: string;
    apiKey: string;
    roles: string;


    // tslint:disable-next-line: max-line-length
    constructor(id: number = null, username: string = null, password: string = null, apiKey: string = null, roles: string = null) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.apiKey = apiKey;
        this.roles = roles;
    }

}
