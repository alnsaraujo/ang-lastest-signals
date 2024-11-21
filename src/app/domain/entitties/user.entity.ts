export interface UserSchema {
    id: number;
    name: string;
}

export class User implements UserSchema {
    constructor(public id: number, public name: string) { }
}