export class Professional {
    id: number;
    username: string;
    password: string;
    apiKey: string;
    firstname: string;
    lastname: string;
    email: string;
    tel: string;
    siret: string;

    // tslint:disable-next-line: max-line-length
    constructor(username: string = null, password: string = null, firstname: string = null, lastname: string = null, email: string = null, tel: string = null, siret: string = null) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.tel = tel;
        this.siret = siret;

    }

}
