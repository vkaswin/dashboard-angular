export namespace Model{
    export interface Register{
        firstName : string,
        lastName : string,
        email : string,
        password : string,
        dob : string,
        address : string,
        gender : string,
        hobbies : string[],
        state : string
    }
    export interface ErrorHandle{
        firstName : boolean,
        lastName : boolean,
        email : boolean,
        password : boolean,
        dob : boolean,
        address : boolean,
        gender : boolean,
        hobbies : boolean,
        state : boolean
    }
}