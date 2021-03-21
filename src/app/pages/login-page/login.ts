interface loginData {
    password: string,
    username: string
}

export class Form {
    constructor(public user: loginData){}
}