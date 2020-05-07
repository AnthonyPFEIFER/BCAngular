export class Garage {
    id: number;
    professional: string;
    name: string;
    tel: string;
    address: string;
    city: string;
    postCode: string;
    country: string;
    adverts: string;

    // tslint:disable-next-line: max-line-length
    constructor(id: number = null, professional: string = null, name: string = null, tel: string = null, address: string = null, city: string = null, postCode: string = null, country: string = null, adverts: string = null, ) {
        this.id = id;
        this.professional = professional;
        this.name = name;
        this.tel = tel;
        this.address = address;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.adverts = adverts;
    }
}
